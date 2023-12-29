import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { PasswordInput } from './components/PasswordInput';
import { EmailInput } from './components/EmailInput';
import { Buttons } from './components/Buttons';
import {
  checkEmail,
  checkPassword,
  decrypt,
  checkUser,
} from '../../functions/_functions';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = () => {
    const inputUser = email.value;
    const inputEmail = email.value;
    const inputPassword = password.value;

    // check if email and password exits
    if (!inputUser || !inputPassword) {
      toast({
        title: 'Incomplete fields.',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    // validate email and password
    (checkEmail(inputEmail) || checkUser(inputUser)) &&
      checkPassword(inputPassword);

    setIsLoading(true);

    // get accounts and token from local storage
    const accounts = JSON.parse(localStorage.getItem('users'));
    let getUserToken = '';
    for (let i = 0; i < accounts.length; i++) {
      if (decrypt(accounts[i].name) === inputUser) {
        getUserToken = accounts[i].token;
      } else if (decrypt(accounts[i].email) === inputEmail) {
        getUserToken = accounts[i].token;
      }
    }

    const isMatchEmail = accounts.some(
      (account) =>
        decrypt(account.email) === inputEmail &&
        decrypt(account.password) === inputPassword
    );

    const isMatchUser = accounts.some(
      (account) =>
        decrypt(account.name) === inputUser &&
        decrypt(account.password) === inputPassword
    );

    if (!isMatchEmail && !isMatchUser) {
      toast({
        title: 'Invalid credentials.',
        description: 'Please check your email and password.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } else if (isMatchEmail) {
      toast({
        title: 'Succesful logged.',
        description: `Welcome back Argonaut!`,
        status: 'success',
        duration: 3000,
        isClosable: false,
        position: 'top',
      });
    } else if (isMatchUser) {
      toast({
        title: 'Succesful logged.',
        description: `Welcome back ${inputUser}!`,
        status: 'success',
        duration: 3000,
        isClosable: false,
        position: 'top',
      });
    }
    localStorage.setItem('loggedIn', getUserToken);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }} // Configura la animación inicial
      animate={{ opacity: 1, x: 0 }} // Configura la animación de entrada
      exit={{ opacity: 0, x: 100 }} // Configura la animación de salida
    >
      <div
        role="banner"
        className="absolute bottom-0 z-[-10] h-[250px] w-[250px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-300 blur-[150px]"
      ></div>
      <div
        role="banner"
        className="absolute right-[50px] z-[-10] h-[250px] w-[250px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-purple-700 via-purple-500 to-purple-300 blur-[150px]"
      ></div>
      <section className="h-[90vh] flex-col flex items-center justify-center">
        <header>
          <h1 className="text-5xl flex flex-col sm:flex-row gap-2 select-none text-white font-semibold text-center  items-center">
            Welcome back,{' '}
            <em className="text-[#00D8FF] flex flex-row items-center pl-2 text-center gap-2">
              Argonaut <Rocket className="h-10 w-10" />
            </em>
          </h1>
        </header>

        <form
          className="flex flex-col py-8 gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <EmailInput />
          <PasswordInput />
          <Buttons isLoading={isLoading} Submt={handleSubmit} />
        </form>
      </section>
    </motion.main>
  );
}

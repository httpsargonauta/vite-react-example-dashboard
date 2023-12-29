import { useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { PasswordInput } from './components/PasswordInput';
import { EmailInput } from './components/EmailInput';
import { Buttons } from './components/Buttons';
import {
  checkEmail,
  checkPassword,
  checkUser,
  encrypt,
} from '../../functions/_functions';
import { UserInput } from './components/UserInput';
import { motion } from 'framer-motion';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // create account with email and password
  const handleSubmit = () => {
    const inputEmail = email.value;
    const inputPassword = password.value;
    const inputUser = user.value;

    function generateToken() {
      return Math.random().toString(36);
    }
    // check if email and password exits
    if (!inputEmail || !inputPassword || !inputUser) {
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

    if (
      !(
        checkEmail(inputEmail) &&
        checkPassword(inputPassword) &&
        checkUser(inputUser)
      )
    ) {
      toast({
        title: 'Invalid fields.',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setIsLoading(true);

    // get accounts
    const accounts = JSON.parse(localStorage.getItem('users')) || [];

    // comprobacion si accounts es empty

    if (accounts.length === 0) {
      let token = generateToken();
      accounts.push({
        id: 1,
        role: encrypt('admin'),
        email: encrypt('admin@argonauts.com'),
        password: encrypt('admin'),
        name: encrypt('admin'),
        token: encrypt(token),
      });
      localStorage.setItem('users', JSON.stringify(accounts));
    }

    // encrypt email and password
    const encryptEmail = encrypt(email.value);
    const encryptPassword = encrypt(password.value);
    const encryptUser = encrypt(user.value);
    const token = encrypt(generateToken());
    const role = encrypt('user');

    // add account
    accounts.push({
      id: accounts.length + 1,
      role: role,
      email: encryptEmail,
      password: encryptPassword,
      name: encryptUser,
      token: token,
    });

    localStorage.setItem('users', JSON.stringify(accounts));
    localStorage.setItem('loggedIn', token);

    setTimeout(() => {
      toast({
        title: 'Successfully created account.',
        description: `Welcome ${inputUser} to Argonauts!`,
        status: 'success',
        duration: 3000,
        isClosable: false,
        position: 'top',
      });

      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/dashboard';
      }, 2000);
    }, 2000);
  };

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div
        role="banner"
        className="absolute bottom-0 z-[-10] h-[250px] w-[250px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-purple-700 via-purple-500 to-purple-300 blur-[150px]"
      ></div>
      <div
        role="banner"
        className="absolute right-[50px] z-[-10] h-[250px] w-[250px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-pink-700 via-pink-500 to-pink-300 blur-[150px]"
      ></div>
      <section className="h-screen select-none flex-col flex items-center justify-center">
        <header>
          <h1 className="text-5xl text-white text-pretty font-semibold text-center">
            Want to be
            <em className="text-[#e91e63] px-2">Argonaut</em>?
          </h1>
        </header>
        <form
          className="flex flex-col p-8 gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <UserInput />
          <EmailInput />
          <PasswordInput />
          <Buttons isLoading={isLoading} Submt={handleSubmit} />
        </form>
      </section>
    </motion.main>
  );
}

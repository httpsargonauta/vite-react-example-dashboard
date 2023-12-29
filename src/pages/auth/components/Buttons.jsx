import { Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Buttons({ isLoading, Submt }) {
  if (window.location.pathname === '/login') {
    const [hover, setHover] = useState('text-[#00D8FF]');

    const handleMouse = () => {
      if (hover === 'text-[#00D8FF]') {
        setHover('text-black');
      } else {
        setHover('text-[#00D8FF]');
      }
    };
    return (
      <ButtonGroup className="max-w-sm justify-center flex flex-col gap-3 items-center text-center">
        <Button
          type="submit"
          onClick={Submt}
          isLoading={isLoading}
          loadingText="Sing In..."
          className="w-full"
          height={'40px'}
          color={'black'}
          borderRadius={'6px'}
          bg={'#00D8FFdf'}
          _hover={{ bg: '#00D8FF88' }}
        >
          Sing In
        </Button>

        <NavLink
          id="navlink"
          to="/register"
          className={`w-full h-[40px] flex items-center justify-center rounded-md border bg-transparent px-4 py-2 font-medium transition-all duration-300 ease-in-out gap-2
          hover:bg-white hover:border-transparent hover:text-black
          `}
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          Don't have an account?{' '}
          <strong
            className={`transition-all duration-300 ease-in-out ${hover}`}
          >
            Create account
          </strong>
        </NavLink>
      </ButtonGroup>
    );
  } else if (window.location.pathname === '/register') {
    const [hover, setHover] = useState('text-[#e91e63]');

    const handleMouse = () => {
      if (hover === 'text-[#e91e63]') {
        setHover('text-black');
      } else {
        setHover('text-[#e91e63]');
      }
    };

    return (
      <ButtonGroup className="max-w-sm justify-center flex flex-col gap-3 items-center text-center">
        <Button
          type="submit"
          onClick={Submt}
          isLoading={isLoading}
          loadingText="Creating Account..."
          className="w-full"
          height={'40px'}
          color={'black'}
          borderRadius={'6px'}
          bg={'#e91e63'} // Cambiar el color de fondo a negro puro
          _hover={{ bg: '#e91e6399' }} // Cambiar el color de fondo al morado intermedio al pasar el mouse
        >
          Create Account
        </Button>
        <NavLink
          to="/login"
          className={`w-full h-[40px] flex items-center justify-center rounded-md border bg-transparent px-4 py-2 font-medium transition-all duration-300 ease-in-out gap-2
          hover:bg-white hover:border-transparent hover:text-black
          `}
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          Already have an account?{' '}
          <strong
            className={`transition-all duration-300 ease-in-out ${hover}`}
          >
            Log in
          </strong>
        </NavLink>
      </ButtonGroup>
    );
  }
}

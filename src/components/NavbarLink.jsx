import { Link } from 'react-router-dom';

export function NavbarLink({ to, text }) {
  return (
    <Link
      to={to}
      className="text-base font-medium text-white hover:text-indigo-50"
    >
      {text}
    </Link>
  );
}

export function AuthButtons() {
  return (
    <>
      <Link
        to={'/login'}
        className="inline-block rounded-md border border-transparent bg-[#00D8FF] py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
      >
        Sign in
      </Link>
      <Link
        to={'/register'}
        className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
      >
        <span className="md:hidden">Sign up</span>
        <span className="hidden md:inline lg:hidden">Create account</span>
        <span className="hidden lg:inline">Create an account</span>
      </Link>
    </>
  );
}

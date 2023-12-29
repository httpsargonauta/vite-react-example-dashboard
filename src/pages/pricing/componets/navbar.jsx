import { Rocket } from 'lucide-react';
import { AuthButtons, NavbarLink } from '../../../components/NavbarLink';

export function Navbar() {
  return (
    <header
      id="header-nav"
      className="bg-transparent sticky z-50 top-0 w-screen py-3 px-8 lg:px-0"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Argonauts</span>
              <Rocket className="h-10 w-auto" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              <NavbarLink to="/" text="Home" />
              <NavbarLink to="/pricing" text="Pricing" />
              <NavbarLink to="/dashboard" text="Dashboard" />
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <AuthButtons />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 lg:hidden">
          <NavbarLink to="/" text="Home" />
          <NavbarLink to="/pricing" text="Pricing" />
          <NavbarLink to="/dashboard" text="Dashboard" />
        </div>
      </nav>
    </header>
  );
}

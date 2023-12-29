import { Link, NavLink } from 'react-router-dom';
import { Navbar } from './nav/nav';
import { ExitButton } from './nav/asideButton';
import reactLogo from '../../assets/react.svg';
import { decrypt } from '../../functions/_functions';

export function Aside({ collapsed, admin, userData }) {
  return (
    <aside
      className={`border-r z-[100] bg-black border-zinc-600/50 h-full p-3 flex flex-col items-center text-center text-white overflow-hidden ${
        collapsed ? 'w-[180px]' : 'w-[100px]'
      } `}
      style={{ transition: 'width 0.3s ease' }}
    >
      <header className="w-full flex justify-center items-center h-[10%]">
        <Link to="/">
          <img
            src={reactLogo}
            className="logo react w-10 h-10"
            alt="React logo"
          />
        </Link>
      </header>

      <section className="w-full h-[40%] flex flex-col justify-center items-center gap-3 mb-20">
        <NavLink to={'/profile'} className={'inline-flex'}>
          <img
            src="https://picsum.photos/200"
            alt={`Imagen asignada al perfil de ${userData.name}`}
            className="relative p-1 w-12 h-12 object-cover rounded-2xl"
          />
          <span className="absolute w-12 h-12 border-2 inline-flex rounded-2xl border-gray-600 opacity-75"></span>
        </NavLink>

        <header>
          <h2
            className={`text-md ${
              !collapsed ? 'w-[69px]' : 'w-full'
            } capitalize font-semibold truncate delay-300`}
            style={{ transition: 'width 0.1s ease' }}
          >
            {decrypt(userData.name)}
          </h2>
          <h3
            className={`${
              admin
                ? 'bg-[#00d9ffcc] text-white'
                : 'bg-zinc-700/50 text-zinc-300'
            } text-xs capitalize font-medium p-1 rounded-lg delay-300`}
            style={{ transition: 'width 0.1s ease' }}
          >
            {admin ? 'admin' : 'user'}
          </h3>
        </header>
      </section>

      <Navbar collapsed={collapsed} />

      <footer className="w-full h-auto flex-1 flex items-center justify-center">
        <ExitButton collapsed={collapsed} />
      </footer>
    </aside>
  );
}

import { useState } from 'react';
import './react.css';
import { Menu, X } from './aside/icons/icons';
import { Aside } from './aside/aside';
import { UserDashboard } from '../functions/_functions';

export function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  const { userData, admin } = UserDashboard();

  return (
    <div className="flex h-screen w-screen ">
      <Aside collapsed={collapsed} admin={admin} userData={userData} />
      <div className="w-full">{children}</div>
      <button
        onClick={handleClick}
        className="fixed top-[20px] right-[20px] p-3 text-white bg-zinc-800 border border-zinc-600/30 h-[50px] rounded-lg flex items-center justify-center text-center w-[50px] z-50"
      >
        {!collapsed ? (
          <Menu className="w-full h-full text-zinc-500 hover:text-white transition-colors duration-200 ease-in-out " />
        ) : (
          <X className="w-full h-full text-zinc-500 hover:text-white transition-colors duration-200 ease-in-out" />
        )}
      </button>
    </div>
  );
}

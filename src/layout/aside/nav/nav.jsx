import { Home, Customer, Users, Settings } from '../icons/icons';
import { AsideItem } from './asideItem';

export function Navbar({ collapsed }) {
  return (
    <nav className="w-full h-auto">
      <ul>
        <AsideItem
          collapsed={collapsed}
          icon={<Home className="w-5 h-5" />}
          text="dashboard"
          hrf="dashboard"
        />
        <AsideItem
          collapsed={collapsed}
          icon={<Customer className="w-5 h-5" />}
          text="customers"
          hrf="customers"
        />
        <AsideItem
          collapsed={collapsed}
          icon={<Users className="w-5 h-5" />}
          text="Users"
          hrf="users"
        />{' '}
        <AsideItem
          collapsed={collapsed}
          icon={<Settings className="w-5 h-5" />}
          text="settings"
          hrf="settings"
        />
      </ul>
    </nav>
  );
}

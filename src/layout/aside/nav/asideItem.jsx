import { NavLink } from 'react-router-dom';

export function AsideItem({ icon, hrf, text, collapsed }) {
  const getActive = () => {
    const url = window.location.href;
    const split = url.split('/')[3];
    if (hrf === split) return true;
    else return false;
  };

  const active = getActive();

  return (
    <li className="mt-1 mb-1">
      <NavLink
        to={`/${hrf}`}
        className={`${
          active ? 'text-white' : 'text-zinc-500 hover:text-white'
        }`}
      >
        <div className="flex gap-3">
          {!collapsed ? (
            <div
              className={`w-full text-center flex justify-between items-center p-3  ${
                active
                  ? 'bg-zinc-700/90 rounded-md'
                  : 'hover:bg-zinc-800/50 text-zinc-500 hover:text-white hover:rounded-md transition-all duration-300 ease-in-out '
              }`}
            >
              <span className={`${active ? 'text-[#00D8FF]' : ''}`}>
                {icon}
              </span>
            </div>
          ) : (
            <div
              className={`w-full text-center flex justify-between items-center p-3   ${
                active
                  ? 'bg-zinc-700/90 rounded-md'
                  : 'hover:bg-zinc-800/50 text-zinc-500 hover:text-white hover:rounded-md transition-all duration-300 ease-in-out '
              }`}
            >
              <span className="w-full flex gap-3 text-center font-bold items-center">
                <span className={`${active ? 'text-[#00D8FF]' : ''}`}>
                  {icon}
                </span>
                <span
                  className={`text-xs ${
                    !collapsed
                      ? 'opacity-0 transition-opacity duration-300 delay-100'
                      : 'opacity-100'
                  }`}
                >
                  {text}
                </span>
              </span>
            </div>
          )}
        </div>
      </NavLink>
    </li>
  );
}

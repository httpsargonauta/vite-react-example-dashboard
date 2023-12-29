import { LogoutIcon } from '../icons/icons';

export function ExitButton({ collapsed }) {
  const logOut = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('permissions');
    window.location.reload();
  };

  return (
    <button
      className={`w-full p-3 hover:bg-zinc-800/50 text-zinc-500 hover:text-white hover:rounded-md transition-all duration-300 ease-in-out`}
      onClick={logOut}
      type="button"
      role="button"
      aria-label="Logout"
    >
      {collapsed ? (
        <span className=" w-full items-center text-xs flex gap-3 font-semibold capitalize">
          <LogoutIcon className="w-6 h-6" />
          exit
        </span>
      ) : (
        <span className="w-full items-center text-xs flex gap-3">
          <LogoutIcon className="w-6 h-6" />
        </span>
      )}
    </button>
  );
}

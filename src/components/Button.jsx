import { Link } from 'react-router-dom';

export function ButtonUI({
  props,
  text,
  icon,
  to,
  variant = 'default',
  aOb,
  click = () => {},
}) {
  const variantMap = {
    default:
      'bg-black text-white border-2 border-zinc-700/70 hover:bg-black/40',
    principal: 'bg-white text-black border-2 border-zinc-400 hover:bg-white/90',
  };

  if (aOb === 'a')
    return (
      <Link
        to={to}
        className={`group ${props} relative inline-flex items-center overflow-hidden rounded-lg
        ${variantMap[variant]}
        px-8 py-2 focus:outline-none focus:ring-2`}
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          {icon}
        </span>

        <span className="text-md font-medium transition-all group-hover:me-4">
          {text}
        </span>
      </Link>
    );

  if (aOb === 'b')
    return (
      <button
        to={to}
        onClick={click}
        className={`group ${props} relative inline-flex items-center overflow-hidden rounded-lg
    ${variantMap[variant]}
    px-8 py-2 focus:outline-none focus:ring-2`}
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          {icon}
        </span>

        <span className="text-md font-medium transition-all group-hover:me-4">
          {text}
        </span>
      </button>
    );
}

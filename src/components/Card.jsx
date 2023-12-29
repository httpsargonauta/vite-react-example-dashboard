export function Card({ children, Props = '' }) {
  return (
    <div
      className={`flex flex-col p-4 bg-zinc-800 border-zinc-700 border shadow-md rounded-2xl transition-all transform scale-90 select-none  w-full h-full ${Props}`}
    >
      {children}
    </div>
  );
}

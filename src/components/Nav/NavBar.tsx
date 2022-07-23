import Link from 'next/link';
import navItems from '../../utils/navItems';

const NavBar: React.FC = () => (
  <nav className="fixed top-0 z-50 flex items-center w-full h-16 font-sans shadow-md select-none bg-slate-800 place-content-between">
    <div className="ml-6">
      <Link href="/">
        <a className="ml-6 text-xl font-bold text-white transition-colors hover:text-green-500">
          Unu
        </a>
      </Link>
    </div>
    <ul className="flex gap-4 mr-6">
      {navItems.map(({ id, path, name, button }) => (
        <li key={id}>
          <Link href={path}>
            <a
              className={
                button
                  ? 'text-white bg-green-500 px-4 py-2 rounded border-solid border-2 border-green-500 hover:text-green-500 hover:bg-transparent transition-all'
                  : 'text-white hover:text-green-500 duration-150 transition-colors text-sm md:text-base'
              }
            >
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;

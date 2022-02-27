import { useState } from 'react';
import Link from 'next/link';

interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <header>
      <nav className="navigation no-select">
        <div className="navigation-logo">
          <Link href="/">
            <a onClick={closeHamburger}>
              <h1 className="navigation-logo">Unu</h1>
            </a>
          </Link>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link href="/karakterek">
              <a className="navigation-link">Karakterek</a>
            </Link>
          </li>
          <li className="navigation-item">
            <Link href="/gyorsitok">
              <a className="navigation-link">Gyorsítok</a>
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link href="/">
              <a className="navigation-btn">Kezdőlap</a>
            </Link>
          </li>
        </ul>

        <div
          className={isToggled ? 'hamburger-icon active' : 'hamburger-icon'}
          onClick={toggleHamburger}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>

      <nav className="hamburger no-select">
        <ul
          className={
            isToggled
              ? 'hamburger-navigation-list active'
              : 'hamburger-navigation-list'
          }
        >
          <li className="hamburger-navigation-item">
            <Link href="/">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Kezdőlap
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/karakterek">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Karakterek
              </a>
            </Link>
          </li>
          <li className="hamburger-navigation-item">
            <Link href="/gyorsitok">
              <a className="hamburger-navigation-link" onClick={closeHamburger}>
                Gyorsítok
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

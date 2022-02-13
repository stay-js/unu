import { useState } from 'react';
import Link from 'next/link';

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHamburger = () => setIsToggled(!isToggled);
  const closeHamburger = () => setIsToggled(false);

  return (
    <header>
      <nav className="navigation">
        <div className="navigation-logo">
          <Link href="/">
            <a>
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
          <Link href="/">
            <a className="navigation-contact-btn no-dec">Kezdőlap</a>
          </Link>
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

      <nav className="hamburger">
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

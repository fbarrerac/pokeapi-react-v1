import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to={"/"} className={styles.nav__logo}>
          <img
            src="../public/pokeball.png"
            alt="Logo - Pokeball"
            className={styles.nav__img}
          />
          <h1 className={styles.nav__title}>PokeApi</h1>
        </Link>

        <ul>
          <li>
            <Link to={"/"}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to={"/search"}>
              <p>Buscador</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

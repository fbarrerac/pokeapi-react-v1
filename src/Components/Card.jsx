/* eslint-disable react/prop-types */
import styles from "../Styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <Link to={"/pokemon/" + pokemon.name} className={styles.link}>
      <section className={styles.card__pokemon}>
        <h3 className={styles.card__name}>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt="" />
      </section>
    </Link>
  );
};

export default Card;

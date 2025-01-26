/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonStats from "../Components/PokemonStats";
import styles from "../Styles/StatsPage.module.css"

const Stats = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setPokemon(resp);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <section className={styles.loaderContainer}>
          <div className="loader"></div>
        </section>
      ) : (
        <PokemonStats pokemon={pokemon} />
      )}
    </>
  );
};

export default Stats;

/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Card from "../Components/Card";
import { useState } from "react";
import styles from "../Styles/CardContainer.module.css";

const Home = (data) => {
  const FirstUrl = "https://pokeapi.co/api/v2/pokemon?limit=30";

  const [firstPokemons, setFirstPokemons] = useState([]);
  const [firstData, setFirstData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(FirstUrl)
      .then((resp) => resp.json())
      .then((resp) => setFirstPokemons(resp.results))
      .catch((error) => console.error("Error al obtener pokemones:", error));
  }, []);

  useEffect(() => {
    if (firstPokemons.length > 0) {
      const fetchPokemon = firstPokemons.map((item) =>
        fetch(item.url)
          .then((resp) => resp.json())
          .catch((error) =>
            console.error(`Error al obtener datos de ${item.name}:`, error)
          )
      );

      Promise.all(fetchPokemon).then((resp) => {
        setFirstData(resp);
        setIsLoading(false);
      });
    }
  }, [firstPokemons]);

  return (
    <>
      <h2 className={styles.title}>HOME</h2>
      {isLoading ? (
        <section className={styles.loaderContainer}>
          <div className="loader"></div>
        </section>
      ) : (
        <section className={styles.container}>
          {firstData.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </section>
      )}
    </>
  );
};

export default Home;

import { useState } from "react";
import styles from "../Styles/Search.module.css";
import Card from "../Components/Card";

const Search = () => {
  const [searchBy, setSearchBy] = useState("id");
  const [searchText, setSearchText] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [isPokemon, setIsPokemon] = useState(false);
  const [message, setMessage] = useState("No results");

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `Buscando Pokémon por ${
        searchBy === "id" ? "ID" : "nombre"
      }: ${searchText}`
    );

    getPokemon();
  };

  const getPokemon = () => {
    fetch(`${url}${searchText}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setPokemon(resp);
        setIsPokemon(true);
      })

      .catch((err) => {
        console.log(err);
        setIsPokemon(false);
        setMessage("Not Found");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__grid}>
        <section className={styles.container__form}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>
                <input
                  type="radio"
                  name="searchBy"
                  value="id"
                  checked={searchBy === "id"}
                  onChange={handleSearchByChange}
                />
                Buscar por ID
              </label>
              <label>
                <input
                  type="radio"
                  name="searchBy"
                  value="name"
                  checked={searchBy === "name"}
                  onChange={handleSearchByChange}
                />
                Buscar por nombre
              </label>
            </div>

            <div>
              <input
                type="text"
                placeholder={
                  searchBy === "id" ? "ID del Pokémon" : "Nombre del Pokémon"
                }
                value={searchText}
                onChange={handleSearchTextChange}
                required
              />
            </div>

            <button type="submit">Buscar</button>
          </form>
        </section>

        <section>
          {!isPokemon ? <p className={styles.message}>{message}</p> : <Card pokemon={pokemon} />}
        </section>
      </div>
    </div>
  );
};

export default Search;

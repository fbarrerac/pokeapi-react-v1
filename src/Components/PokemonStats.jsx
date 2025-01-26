/* eslint-disable react/prop-types */
import styles from "../Styles/PokemonStats.module.css";

const PokemonStats = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="Pokemon" />

      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Type</th>
            <td className={styles.capitalize}>{pokemon.types[0].type.name}</td>
          </tr>
          <tr>
            <th>Id</th>
            <td>{pokemon.id}</td>
          </tr>
          <tr>
            <th>Base Experience</th>
            <td>{pokemon.base_experience}</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Height</th>
            <td>{pokemon.height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{pokemon.weight}</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Stats</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{pokemon.stats[0].stat.name}</th>
            <td>{pokemon.stats[0].base_stat}</td>
          </tr>
          <tr>
            <th>{pokemon.stats[1].stat.name}</th>
            <td>{pokemon.stats[1].base_stat}</td>
          </tr>
          <tr>
            <th>{pokemon.stats[2].stat.name}</th>
            <td>{pokemon.stats[2].base_stat}</td>
          </tr>
          <tr>
            <th>{pokemon.stats[5].stat.name}</th>
            <td>{pokemon.stats[5].base_stat}</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.abilities.map((item) => (
            <tr key={item.ability.name}>
              <td className={styles.capitalize}>{item.ability.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonStats;

/* 

nombre
img

tipo
id
experiencia base

estatura
peso

vida
ataque
defensa
speed

habilidades
-blaze
-solar-power




*/

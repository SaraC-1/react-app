import { useEffect, useState } from "react";

type BerryType = {
  name: string;
  url: string;
};

const Pokemons = () => {
  const [berries, setBerries] = useState<BerryType[]>([]);

  const getBerries = () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setBerries(data.results);
      })
      .catch((error) => console.error(error));
  };

  const getCapitalCity = () => {
    fetch("https://restcountries.com/v3.1/capital")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].flags.png);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBerries();
    getCapitalCity();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Find Pokemon Color</h1>
        <div>
          <input type="text" />
          <p></p>
          <div id="colored"></div>
        </div>
        <h1>All berries</h1>
        <div>
          {berries.map((berry) => {
            return <div>{berry.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Pokemons;

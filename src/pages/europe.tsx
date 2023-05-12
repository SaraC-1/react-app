import { useEffect, useState } from "react";

type CountryNameType = {
  common: string;
  official: string;
  currencies: CurrenciesType;
};
type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};
type FlagsType = {
  png: string;
  svg: string;
};
type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrenciesType;
  capital: string[];
};

const Europe = () => {
  const [europeData, setEuropeData] = useState<CountryType[]>([]);
  const getEuropeData = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEuropeData();
  }, []);

  return (
    <div className="container">
      <h1>Europe</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Europe;

import person from "./../assets/person.svg";
import left from "./../assets/left-side.svg";
import right from "./../assets/right-side.svg";

import { useEffect, useState } from "react";
import RightSide from "../components/right-side";
import LeftSide from "../components/left-side";

type CountryNameType = {
  common: string;
  official: string;
};

type MapsType = {
  googleMaps: string;
};

type CarType = {
  side: string;
  signs: string[];
};

export type CountryType = {
  name: CountryNameType;
  maps: MapsType;
  population: number;
  borders: string[];
  car: CarType;
  area: number;
};

const Africa = () => {
  const [africaData, setAfricaData] = useState<CountryType[]>([]);

  const getAfricaData = () => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAfricaData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAfricaData();
  }, []);

  return (
    <div className="container">
      <h1>Africa</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Maps</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {africaData.map((country: CountryType) => {
            return (
              <tr key={country.area}>
                <td>{country.name.common}</td>
                <td>
                  <a href={country.maps.googleMaps}>{country.name.common}</a>
                </td>
                <td>
                  {" "}
                  <img
                    src={person}
                    alt="population"
                    className="peopleicon"
                  />{" "}
                  {country.population}
                </td>
                <td>{country.borders + " "}</td>
                <td>
                  {country.car.side === "left" ? <LeftSide /> : <RightSide />}
                  {", "}
                  {country.car.signs}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Africa;

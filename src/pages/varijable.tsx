import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  guitars: {
    prva: string;
    druga: string;
    treca: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: "red" | "green" = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferrari" | undefined = "bmw";
  const obj: UserType = {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Schecter",
    },
  };
  const fruitName: string = "pear";
  const fruitCalories: number = 57.1;
  let fruitColor: "yellow" | "green" = "yellow";
  const fruitEdible: boolean = true;

  color = "green";

  if (pi & number) {
    console.log(pi);
  }
  if (pi | number) {
    console.log(pi);
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + secondNumber + ourValue;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  return (
    <div className="container container--dark">
      <h4>Vrijednost pi varijable je: {pi + 5}</h4>
      <h4>Vrijednost color varijable je: {color}</h4>
      <h4>Vrijednost car varijable je: {car}</h4>
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <div>Rezultat naše funckije je: {addOnOurValue(4, 5)}</div>
      <div>
        Vrijednosti našeg objekta su: {obj.name} {obj.lastName}
      </div>
      <div>
        Gitare: {obj.guitars.prva},{obj.guitars.druga}, {obj.guitars.treca}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Fruit</th>
              <th>Calories</th>
              <th>Color</th>
              <th>Edible</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fruitName}</td>
              <td>{fruitCalories}cal</td>
              <td>{fruitColor}</td>
              <td>{fruitEdible ? "yes" : "no"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Varijable;

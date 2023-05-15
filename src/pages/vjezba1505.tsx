import { useEffect } from "react";

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: number, b: number) => {
    return a + b;
  };
  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = (a: string[], b: string[]) => {
    return a.concat(b);
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    for (let i = 1; i < 11; i++) {
      console.log(i);
    }
    return "";
  };

  //4. Funkcija koja zbraja sve brojeve iz array-a
  const sumArray = (numbers: number[]) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };

  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    lastName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    lastName: "Sakoman",
  };

  const getFullName = (person: UserType) => {
    return person.firstName + person.lastName;
  };

  getFullName(user);

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32;
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: string) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    //1
    console.log(add(2, 3));
    //2
    const stringarray = ["puto", "pis"];
    console.log(concatArrays(stringarray, ["morski", "pas"]));
    //3
    console.log(countToTen());
    //4
    console.log(sumArray([5, 2, 3]));
    //5
    console.log(getFullName(user));
    //6
    console.log(celsiusToFahrenheit(20));
    //7
    console.log(reverseString("pas"));
  }, []);
  return <div className="container"></div>;
};

export default Vjezba1505;

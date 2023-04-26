const Vjezba2604 = () => {
  let arr = ["mama", "tata", "baka", "dida"];

  for (let i = 0; i < arr.length; i++) {
    //if (arr[i] == "baka") {
    //break;
    //}
    //console.log(arr[i]);
    //if (arr[i] == "tata") {
    //delete arr[i];
    //}
  }

  //delete arr[1];

  //arr.push("Sara");

  //console.log("nas array je:", arr);

  //FUNKCIJE
  /* function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        return arr[i];
      }
    }
  }*/

  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //OBJEKTI
  type CarType = {
    [key: string]: number | string;
  };

  let car: CarType = {
    marka: "Škoda",
    model: "Fabia",
    tipMotora: "benzin",
    obujamMotora: 1600,
    snaga: "50kw",
    boja: "zelena",
    kotaca: 4,
    maxBrzina: 180,
  };

  const recenica = `Moja ${car.marka} ${car.model} ima ${car.kotaca} kotaca i vozi ${car.maxBrzina} na sat.`;

  const printValue = (key: string) => {
    return car[key];
  };

  //ZADATAK

  const brojevi = [15, 17, 37, 11, 14, 23, 61];

  let maxNumber: number = brojevi[0];
  const biggestNumber = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > maxNumber) {
        maxNumber = brojevi[i];
      }
    }
    console.log(maxNumber);
  };
  return (
    <div>
      <h1>Nizovi</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <div>{recenica}</div>
      <h5>JSON objekt: </h5>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("marka")}</div>
      <div></div>
    </div>
  );
};

export default Vjezba2604;

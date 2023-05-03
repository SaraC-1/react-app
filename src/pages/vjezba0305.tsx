const Vjezba0305 = () => {
  //1. Dohvatiti box i promijeniti background color kroz JS

  const background = document.getElementsByClassName(
    "box"
  )[0] as HTMLDivElement;
  background.style.backgroundColor = "red";

  //2. Dodati dodatnu klasu na box koja ce povecati njegove dimenzije

  background.classList.add("enlarge");

  //3. Animirati box do 30px i nazad
  //3.2 Animirati box dijagonalno do (30px, 30px) i nazad do 50px
  //4. Kreirati funkciju koja ce imati lokalnu varijabluu kojoj cemo izracunati sumu 2 parametra i rezultat ispisati unutar boxa
  //5. Dodaj onClick event i na klik smanji dimenzije boxa

  let position = 0;
  let reverse = false;
  const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
  const frame = () => {
    if (reverse) {
      position--;
    } else {
      position++;
    }
    const currentPosition = position + "px";
    if (position == 30) {
      reverse = true;
    }
    if (position == 0) {
      reverse = false;
    }
    box.style.marginLeft = currentPosition;
  };
  const animate = setInterval(frame, 30);

  const handleClick = () => {};

  return (
    <div>
      <div className="box"></div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default Vjezba0305;

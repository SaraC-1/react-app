import phone from "./../assets/phone.jpg";
import IconEdit from "./icon-edit";

const FlexExe = () => {
  return (
    <>
      <h4>First example</h4>
      <div className=" flex flex--first">
        <div>
          <img
            src="https://source.unsplash.com/random/50x50/?phone"
            alt="phone"
          />
          <span>text</span>
        </div>
        <div>
          <IconEdit />
        </div>
      </div>

      <h4>Second example</h4>
      <div className="flex flex--second">
        <span>text</span>
        <img src="https://source.unsplash.com/random/50x50/?x" alt="x" />
      </div>

      <h4>Third example</h4>
      <div className="flex flex--third">
        <img src="https://source.unsplash.com/random/50x50/?phone" alt="x" />
        <span>text</span>
      </div>

      <h4>Kartice</h4>
      <div className="card card--wrapper">
        <div className="card__item">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            diam vulputate ut pharetra sit. Leo in vitae turpis massa sed
            elementum tempus.
          </p>
          <button>Text</button>
        </div>
        <div className="card__item">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Text</button>
        </div>
        <div className="card__item">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
            turpis massa sed elementum tempus egestas. Dictumst vestibulum
            rhoncus est pellentesque elit ullamcorper dignissim cras. Nunc
            pulvinar sapien et ligula ullamcorper malesuada proin libero.
            Aliquam id diam maecenas ultricies mi eget mauris.
          </p>
          <button>Text</button>
        </div>
      </div>
    </>
  );
};
export default FlexExe;

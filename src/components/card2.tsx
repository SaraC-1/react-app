import lion from "./../assets/lion.png";
import button from "./../assets/button.svg";

const Card2 = () => {
  return (
    <div className="card2">
      <div className="card2__header">
        <img className="card2__logo" src={lion} alt="Premier League logo" />
        <div className="card2__title">
          <h1>GAMEWEEK 17</h1>
          <h2>Premier League</h2>
        </div>
      </div>
      <div className="card2__main">
        <div>
          <label htmlFor="">Winning prize</label>
          <br />
          <span>Signed BVB Jersey</span>
        </div>
        <div className="card2__counter">
          <span className="card2__counter__span">14</span>
          <span className="card2__counter__span">days</span>
        </div>
      </div>
      <hr />
      <div className="card2__footer">
        <div>
          <label htmlFor="">Game points</label>
          <br />
          <span>1000</span>
        </div>
        <div>
          <label htmlFor="">Game entries</label>
          <br />
          <span>1452</span>
        </div>
        <div>
          <label htmlFor="">Reminder</label>
          <div className="card2__button">
            <div className="card2__toggle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;

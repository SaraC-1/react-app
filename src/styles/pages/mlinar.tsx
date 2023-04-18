const Mlinar = () => {
  return (
    <div className="container container--dark">
      <div className="mlinar">
        <p className="mlinar__title">
          <span className="mlinar__title--orange">Najukusniji</span> pekarski{" "}
          <br /> proizvodi u susjedstvu.
        </p>
        <div className="mlinar__tags">
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Kruh</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Peciva</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Slano</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Slatko</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Burek</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Pizza</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Sendviči</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Salata</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">HoReCa</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Pakirano</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Kolači</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Torte</span>
          </div>
          <div className="mlinar__tags__tag">
            {" "}
            <span className="mlinar__tags__tag__text">Prigodne torte</span>
          </div>
        </div>
      </div>
      <div className="grid__images">
        <div>
          <img className="grid__images__img" src="" alt="kruh" />
          <h6 className="grid__images__h6">Kruh</h6>
          <span className="grid__images__span">Kruhovi ravno iz peći</span>
        </div>
      </div>
    </div>
  );
};

export default Mlinar;

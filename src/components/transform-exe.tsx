const TransformExe = () => {
  return (
    <div className="box__wrapper">
      <div className="box__mini">
        <h4>Translate</h4>
        <div className="box box--translate"></div>
      </div>
      <div className="box__mini">
        <h4>Rotate</h4>
        <div className="box box--rotate"></div>
      </div>
      <div className="box__mini">
        <h4>Scale</h4>
        <div className="box box--scale"></div>
      </div>
      <div className="box__mini">
        <h4>Skew</h4>
        <div className="box box--skew"></div>
      </div>
    </div>
  );
};
export default TransformExe;

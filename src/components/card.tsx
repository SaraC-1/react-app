import umbreon from "./../assets/umbreon.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="card__img" src={umbreon} alt="Umbreon" />
      <h1 className="card__title">Umbreon</h1>
      <p className="card__desc">
        Umbreon's evolution is the result of Eevee being exposed to the
        moonlight, which altered its genetic structure. Umbreon's yellow rings
        glow when it is excited, such as when it leaps to attack; or when
        exposed to the moon's aura, which fills it with a mysterious energy.
        Umbreon hunts at night and, as such, has well-developed eyes that can
        spot a prey even in darkness. Its black fur helps it blend into the
        night while waiting for the right moment to pounce. When it does, its
        rings emit a dim yet ominous glow, and it lunges for the prey's throat
        before eating it. Whenever angered or agitated, Umbreon sprays poisonous
        sweat secreted from its pores into the offender's eyes to protect
        itself.
      </p>
      <div className="card__footer">
        <button>Defense</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Card;

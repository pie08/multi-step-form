export default function SelectCard({
  image,
  plan,
  price,
  onClick,
  isSelected,
  isYearly,
}) {
  return (
    <div
      className={`select-card ${isSelected ? "active" : ""}`}
      onClick={() => onClick(plan)}
    >
      <img className="select-card__img" src={image} alt="Arcade stick" />

      <div className="select-card__info-box">
        <p className="select-card__plan">
          {plan[0].toUpperCase().concat(plan.slice(1))}
        </p>
        <p className="select-card__pricing">
          ${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
        </p>
        {isYearly && <p className="select-card__savings">2 months free</p>}
      </div>
    </div>
  );
}

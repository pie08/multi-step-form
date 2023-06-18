/**
 *
 * @param {Number} step
 * @param {String} title
 * @param {Boolean} isActive - Set active state
 * @returns JSX
 */
export default function Step({ step, title, isActive }) {
  return (
    <div className={`step ${isActive ? "active" : ""}`}>
      <span className="step__number">{step}</span>
      <div className="step__text">
        <p className="step__descriptor">Step {step}</p>
        <p className="step__title">{title}</p>
      </div>
    </div>
  );
}

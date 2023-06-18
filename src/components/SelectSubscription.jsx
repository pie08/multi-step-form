import Switch from "./Switch";

export default function SelectSubscription({ yearly, setYearly }) {
  return (
    <div className="selector">
      <span className={!yearly ? "active" : ""}>Monthly</span>
      <Switch setState={setYearly} isActive={yearly} />
      <span className={yearly ? "active" : ""}>Yearly</span>
    </div>
  );
}

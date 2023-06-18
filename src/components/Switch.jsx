import { useState } from "react";

export default function Switch({ setState, isActive = false }) {
  const [active, setActive] = useState(isActive);

  function handleClick() {
    setActive((s) => !s);
    setState((s) => !s);
  }

  return (
    <span className={`switch ${active ? "active" : ""}`} onClick={handleClick}>
      <span className="switch__ball"></span>
    </span>
  );
}

import React from "react";

function Navigation({ step, setStep }) {
  return (
    <div className="navigation-container">
      <button
        className={step === 1 ? "tab active" : "tab"}
        onClick={() => setStep(1)}>
        Personal Info ⮞
      </button>
      <button
        className={step === 2 ? "tab active" : "tab"}
        onClick={() => setStep(2)}
        disabled={step < 2}>
        Address ⮞
      </button>
      <button
        className={step === 3 ? "tab active" : "tab"}
        onClick={() => setStep(3)}
        disabled={step < 3}>
        Confirmation ⮞
      </button>
    </div>
  );
}

export default Navigation;

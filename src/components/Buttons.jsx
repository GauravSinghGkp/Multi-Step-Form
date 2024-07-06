import React from "react";

function Buttons({
  step,
  setStep,
  maxStep,
  setFormData,
  validateStep,
  handleSubmit,
}) {
  const handleNext = () => {
    if (step < maxStep) {
      const errors = validateStep(step);
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
      } else {
        setFormData((prevData) => ({ ...prevData, errors }));
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="btns">
      <button
        className="btn"
        id="prev"
        onClick={handlePrev}
        disabled={step === 1}>
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={step === maxStep ? handleSubmit : handleNext}
        disabled={step > maxStep}>
        {step === maxStep ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default Buttons;

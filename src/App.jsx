import { useEffect, useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Navigation from "./components/Navigation";
import AddressInfo from "./components/AddressInfo";
import Confirmation from "./components/Confirmation";
import Buttons from "./components/Buttons";

function App() {
  const [step, setStep] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    errors: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isInitialized) {
      const savedData = JSON.parse(localStorage.getItem("formData"));
      if (savedData) {
        setFormData(savedData);
      }
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, isInitialized]);

  const validateStep = (currentStep) => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (currentStep === 1) {
      if (!formData.name) errors.name = "Name is required";
      if (!formData.email) {
        errors.email = "Email is required";
      } else if (!emailPattern.test(formData.email)) {
        errors.email = "Email is not valid";
      }
      if (!formData.phone) {
        errors.phone = "Phone is required";
      } else if (!phonePattern.test(formData.phone)) {
        errors.phone = "Phone number is not valid";
      }
    } else if (currentStep === 2) {
      if (!formData.address1) errors.address1 = "Address Line 1 is required";
      if (!formData.city) errors.city = "City is required";
      if (!formData.state) errors.state = "State is required";
      if (!formData.zip) errors.zip = "Zip Code is required";
    }

    return errors;
  };

  const handleSubmit = () => {
    const errors = validateStep(step);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError("");
      // Simulating an API call with setTimeout
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulating success/failure response
        setIsSubmitting(false);
        if (success) {
          alert("Form submitted successfully");
          // localStorage.removeItem("formData");
        } else {
          setSubmitError("Failed to submit the form. Please try again.");
        }
      }, 2000);
    } else {
      setFormData((prevData) => ({ ...prevData, errors }));
    }
  };

  return (
    <div className="app">
      <div className="logo">
        <h1>Multi Step Form</h1>
      </div>
      <Navigation step={step} setStep={setStep} />
      <div className="form-container">
        {step === 1 && (
          <PersonalInfo formData={formData} setFormData={setFormData} />
        )}
        {step === 2 && (
          <AddressInfo formData={formData} setFormData={setFormData} />
        )}
        {step === 3 && (
          <Confirmation
            formData={formData}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        )}
      </div>
      <Buttons
        step={step}
        setStep={setStep}
        maxStep={3}
        setFormData={setFormData}
        validateStep={validateStep}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default App;

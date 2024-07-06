import React from "react";

function AddressInfo({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: { ...formData.errors, [name]: "" },
    });
  };

  return (
    <div className="container">
      <h2>Address Information</h2>
      <input
        className={formData.errors.address1 && "error-field"}
        type="text"
        name="address1"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={handleChange}
      />
      {formData.errors.address1 && <span>{formData.errors.address1}</span>}
      <input
        type="text"
        name="address2"
        placeholder="Address Line 2"
        value={formData.address2}
        onChange={handleChange}
      />
      <input
        className={formData.errors.city && "error-field"}
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      {formData.errors.city && <span>{formData.errors.city}</span>}
      <input
        className={formData.errors.state && "error-field"}
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      {formData.errors.state && <span>{formData.errors.state}</span>}
      <input
        className={formData.errors.zip && "error-field"}
        type="text"
        name="zip"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={handleChange}
      />
      {formData.errors.zip && <span>{formData.errors.zip}</span>}
    </div>
  );
}

export default AddressInfo;

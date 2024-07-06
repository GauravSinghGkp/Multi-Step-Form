import React from "react";

function PersonalInfo({ formData, setFormData }) {
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
      <h2>Personal Information</h2>
      <input
        className={formData.errors.name && "error-field"}
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {formData.errors.name && <span>{formData.errors.name}</span>}
      <input
        className={formData.errors.email && "error-field"}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {formData.errors.email && <span>{formData.errors.email}</span>}
      <input
        className={formData.errors.phone && "error-field"}
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {formData.errors.phone && <span>{formData.errors.phone}</span>}
    </div>
  );
}

export default PersonalInfo;

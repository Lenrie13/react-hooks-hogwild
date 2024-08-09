import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    highestMedal: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedal: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" />
      <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight" />
      <label>
        Greased
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="highestMedal" value={formData.highestMedal} onChange={handleChange} placeholder="Highest Medal Achieved" />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
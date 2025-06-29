import React, { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      nutsFree: formData.nutsFree ? "on" : "off",
      lactoseFree: formData.lactoseFree ? "on" : "off",
      vegan: formData.vegan ? "on" : "off",
    }).toString();

    window.location.href = `http://localhost:3000/?${query}`;
  };

  return (
    <div>
      <h1>React Form</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

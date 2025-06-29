import React from "react";
import "./FormComponent.css";

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
{/* Gender */}
<div className="form-group">
  <label>Gender:</label>
  <div className="form-inline">
    <label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === "male"}
        onChange={handleChange}
      />
      Male
    </label>

    <label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === "female"}
        onChange={handleChange}
      />
      Female
    </label>
  </div>
</div>

{/* Destination */}
<div className="form-group-inline">
  <label htmlFor="destination">Destination:</label>
  <select
    id="destination"
    name="destination"
    value={formData.destination}
    onChange={handleChange}
  >
    <option value="">-- Choose a Destination --</option>
    <option value="Japan">Japan</option>
    <option value="Morocco">Morocco</option>
    <option value="USA">USA</option>
  </select>
</div>

{/* Dietary Restrictions */}
<div className="form-group">
  <label>Dietary Restrictions:</label>
  <div className="form-inline">
    <label>
      <input
        type="checkbox"
        name="nutsFree"
        checked={formData.nutsFree}
        onChange={handleChange}
      />
      Nuts Free
    </label>

    <label>
      <input
        type="checkbox"
        name="lactoseFree"
        checked={formData.lactoseFree}
        onChange={handleChange}
      />
      Lactose Free
    </label>

    <label>
      <input
        type="checkbox"
        name="vegan"
        checked={formData.vegan}
        onChange={handleChange}
      />
      Vegan
    </label>
  </div>
</div>

        <button type="submit">Submit</button>
      </form>

      {/* Result Display */}
      <hr />
      <h2>Entered Info:</h2>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Destination: {formData.destination}</p>
      <p>Dietary:</p>
      <ul>
        {formData.nutsFree && <li>Nuts Free</li>}
        {formData.lactoseFree && <li>Lactose Free</li>}
        {formData.vegan && <li>Vegan</li>}
        {!formData.nutsFree && !formData.lactoseFree && !formData.vegan && <li>None</li>}
      </ul>
    </>
  );
}

export default FormComponent;

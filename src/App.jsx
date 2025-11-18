import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    //prevFromData allows us to make a copy of formData, and then add new stuff
    // setFormData(newData) <- old way
  }
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    }); //resets the form to its initial state so it is ready for the next user
  }
  //form that catures data from the user - name, email phone
  //create a state variable to store the form data, which will be an object
  //handlechange function that will be boilerplate code
  //handleSubmit for the submit button
  //some JSX where we will create/render the form for the user to see

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <div className="names">
          <div>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label htmlFor="email">Email Addres *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Query Type *</label>
        <div className="all-radios">
          <div className="single-radio">
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={formData.queryType === "general"}
              onChange={handleChange}
              required
            />
            <label>General Enquiry</label>
          </div>

          <div className="single-radio">
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={formData.queryType === "support"}
              onChange={handleChange}
              required
            />
            <label>Support Request</label>
          </div>
        </div>

        <label htmlFor="message">Message *</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            required
          />
          <label>I consent to being contacted by the team *</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

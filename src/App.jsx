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
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    });
  }

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

        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="radio-label">Query Type *</label>
        <div className="all-radios">
          <label className="single-radio">
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={formData.queryType === "general"}
              onChange={handleChange}
              required
            />
            General Enquiry
          </label>

          <label className="single-radio">
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={formData.queryType === "support"}
              onChange={handleChange}
              required
            />
            Support Request
          </label>
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
            id="consent"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            required
          />
          <label htmlFor="consent">
            I consent to being contacted by the team *
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

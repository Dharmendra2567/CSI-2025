import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  validateFirstname,
  validateLastname,
  validateUsername,
  validatePhone,
  validateEmail,
  validatePassword,
  validateAdhaar,
  validatePAN,
  validateCountryCode,
} from "./utils/validation";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: { value: "", valid: false },
    lastname: { value: "", valid: false },
    username: { value: "", valid: false },
    email: { value: "", valid: false },
    password: { value: "", valid: false },
    phone: { value: "", valid: false },
    countryCode: { value: "", valid: false },
    adhaar: { value: "", valid: false },
    pan: { value: "", valid: false },
    country: { value: "", valid: false },
    city: { value: "", valid: false },
  });

  const handleChange = (field, value, validator) => {
    const isValid = validator(value);
    setFormData((prev) => ({
      ...prev,
      [field]: { value, valid: isValid },
    }));
  };

  const allValid = Object.values(formData).every((field) => field.valid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allValid) {
      const formattedData = {};
      for (let key in formData) {
        formattedData[key] = formData[key].value;
      }
      navigate("/formdata", { state: formattedData });
    }
  };

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        setCountries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const cityList = selectedCountry?.cities || [];

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-12 col-md-8 col-lg-6 p-4 m-4 shadow-lg d-flex justify-content-center align-items-center flex-column">
          <form className="w-100 g-3" onSubmit={handleSubmit}>
            <div className="text-center">
              <img className="mb-4" src="./register.jpg" alt="" width="72" height="72" />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Register here</h1>

            {/* Firstname & Lastname */}
            <div className="w-100 d-flex justify-content-between mb-3">
              <div className="input-group">
                <span className="input-group-text">👤</span>
                <div className="form-floating">
                  <input
                    type="text"
                    id="firstname"
                    className={`form-control ${formData.firstname.value && (formData.firstname.valid ? "is-valid" : "is-invalid")}`}
                    onChange={(e) => handleChange("firstname", e.target.value, validateFirstname)}
                    placeholder=""
                    required
                  />
                  <label htmlFor="firstname">Firstname</label>
                  <div className="invalid-feedback">Please enter a valid name</div>
                </div>
              </div>

              <div className="input-group ms-3">
                <span className="input-group-text">👥</span>
                <div className="form-floating">
                  <input
                    type="text"
                    id="lastname"
                    className={`form-control ${formData.lastname.value && (formData.lastname.valid ? "is-valid" : "is-invalid")}`}
                    onChange={(e) => handleChange("lastname", e.target.value, validateLastname)}
                    placeholder="Lastname"
                    required
                  />
                  <label htmlFor="lastname">Lastname</label>
                </div>
              </div>
            </div>

            {/* Username & Phone */}
            <div className="w-100 d-flex justify-content-between mb-3">
              <div className="input-group">
                <span className="input-group-text">🧑</span>
                <div className="form-floating">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className={`form-control ${formData.username.value && (formData.username.valid ? "is-valid" : "is-invalid")}`}
                    onChange={(e) => handleChange("username", e.target.value, validateUsername)}
                    required
                  />
                  <label htmlFor="username">Username</label>
                  <div className="invalid-feedback">Username must be valid</div>
                </div>
              </div>

              <div className="input-group ms-3 flex-grow-1 d-flex w-100">
                <span className="input-group-text">📞</span>
                <div className="form-floating me-2" style={{ flex: 2 }}>
                  <input
                    type="text"
                    id="countryCode"
                    placeholder="Code"
                     className={`form-control ${formData.countryCode.value && (formData.countryCode.valid ? "is-valid" : "is-invalid")}`}
                    onChange={(e) => handleChange("countryCode", e.target.value, validateCountryCode)}
                    required
                  />
                  <label htmlFor="countryCode">Country Code</label>
                </div>
                <div className="form-floating" style={{ flex: 4 }}>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    className={`form-control ${formData.phone.value && (formData.phone.valid ? "is-valid" : "is-invalid")}`}
                    onChange={(e) => handleChange("phone", e.target.value, validatePhone)}
                    required
                  />
                  <label htmlFor="phone">Phone No</label>
                  <div className="invalid-feedback">Enter a valid 10-digit phone number.</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="input-group mb-3">
              <span className="input-group-text">📧</span>
              <div className="form-floating">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`form-control ${formData.email.value && (formData.email.valid ? "is-valid" : "is-invalid")}`}
                  onChange={(e) => handleChange("email", e.target.value, validateEmail)}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="invalid-feedback">Enter a valid email.</div>
              </div>
            </div>

            {/* Password */}
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <div className="form-floating flex-grow-1 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className={`form-control ${formData.password.value && (formData.password.valid ? "is-valid" : "is-invalid")}`}
                  onChange={(e) => handleChange("password", e.target.value, validatePassword)}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className="invalid-feedback"> Password must contain at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and be at least 6 characters long.</div>
                <button
                  type="button"
                  className="btn position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ zIndex: 2 }}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} id="toggleIcon"></i>
                </button>
              </div>
            </div>

            {/* Country & City */}
            <div className="d-flex justify-content-evenly mb-3">
              <div style={{ width: "45%" }}>
                <label className="form-label">Country</label>
                <select
                  className={`form-select ${formData.country.value && (formData.country.valid ? "is-valid" : "is-invalid")}`}
                  value={selectedCountry?.country || ""}
                  onChange={(e) => {
                    const selected = countries.find((c) => c.country === e.target.value);
                    setSelectedCountry(selected);
                    handleChange("country", e.target.value, (val) => val !== "");
                  }}
                >
                  <option value="" disabled>Choose...</option>
                  {countries.map((data, index) => (
                    <option key={index} value={data.country}>
                      {data.country}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ width: "45%" }}>
                <label className="form-label">City</label>
                <select
                  className={`form-select ${formData.city.value && (formData.city.valid ? "is-valid" : "is-invalid")}`}
                  onChange={(e) => handleChange("city", e.target.value, (val) => val !== "")}
                >
                  <option value="" disabled selected>Choose...</option>
                  {cityList.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Aadhaar */}
            <div className="input-group mb-3">
              <span className="input-group-text">🆔</span>
              <div className="form-floating">
                <input
                  type="text"
                  id="adhaar"
                  placeholder="Aadhaar"
                  className={`form-control ${formData.adhaar.value && (formData.adhaar.valid ? "is-valid" : "is-invalid")}`}
                  onChange={(e) => handleChange("adhaar", e.target.value, validateAdhaar)}
                  required
                />
                <label htmlFor="adhaar">Aadhaar</label>
                <div className="invalid-feedback">Enter a valid Aadhaar number.</div>
              </div>
            </div>

            {/* PAN */}
            <div className="input-group mb-4">
              <span className="input-group-text">🆔</span>
              <div className="form-floating">
                <input
                  type="text"
                  id="pan"
                  placeholder="PAN"
                  className={`form-control ${formData.pan.value && (formData.pan.valid ? "is-valid" : "is-invalid")}`}
                  onChange={(e) => handleChange("pan", e.target.value, validatePAN)}
                  required
                />
                <label htmlFor="pan">PAN</label>
                <div className="invalid-feedback">Enter a valid PAN number.</div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={!allValid}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

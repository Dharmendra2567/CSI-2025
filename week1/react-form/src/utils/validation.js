// src/utils/validation.js

export const validateFirstname = (name) => /^[A-Za-z]{2,}$/.test(name);

export const validateLastname = (name) => /^[A-Za-z]{2,}$/.test(name);

export const validateUsername = (username) => /^[A-Za-z0-9_]{3,}$/.test(username);

export const validateCountryCode = (code) => {
  return /^\+\d+$/.test(code);
};

export const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  return pattern.test(password);
};


export const validateAdhaar = (adhaar) => /^[0-9]{12}$/.test(adhaar);
export const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

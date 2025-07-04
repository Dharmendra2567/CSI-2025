
---

## 📋 React Form with Validation and Country-City Selector

This project is a **React-based form** that includes:

* Form validation (required fields)
* Real-time error messages
* Submit button disabled until the form is valid
* Password show/hide toggle
* Dynamic **country** and **city** dropdowns using the [CountriesNow API](https://countriesnow.space)
* Post-submission display on a separate route

---

### 🖼️ Features

* ✅ React form with required field validation (without any third-party form libraries)
* ✅ Real-time error messages under each input
* ✅ Show/hide toggle for password input
* ✅ Dropdown to select a **country**, and a dependent dropdown for **cities**
* ✅ Disabled submit button until form is valid
* ✅ Submitted data shown on a new route (`/success`)
* ✅ Responsive UI using Bootstrap

---

### 🧑‍💻 Technologies Used

* React (with Hooks)
* React Router DOM
* Bootstrap (for styling)
* Fetch API (for retrieving countries and cities)

### 🛠️ Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Dharmendra2567/CSI-2025/tree/master/week1/react-form
cd react-country-form
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start the Development Server

```bash
npm start
```

App will run at `http://localhost:3000`

---

### ✨ Usage

1. Fill all required fields:

   * First Name, Last Name, Username
   * Email, Password (with toggle)
   * Phone No. (Country Code + Number)
   * PAN No. and Aadhar No.
2. Select a country, then the cities dropdown will populate based on that country.
3. Submit the form (Submit button is disabled until all fields are valid).
4. On successful submission, you are redirected to a new route `/success`, which displays all the entered data.

---

### 🚦 Validation Rules

| Field        | Rule                             |
| ------------ | -------------------------------- |
| First Name   | Required                         |
| Last Name    | Required                         |
| Username     | Required                         |
| Email        | Required + must be a valid email |
| Password     | Required + min 6 chars           |
| Phone No.    | Required + numeric only          |
| Country Code | Required                         |
| Country      | Required                         |
| City         | Required                         |
| PAN No.      | Required + 10 alphanumeric chars |
| Aadhar No.   | Required + 12 digits             |

---

### 🌐 Countries & Cities API

All country and city data is fetched from the [CountriesNow API](https://countriesnow.space/api/v0.1/countries/positions).

* Countries API: `https://countriesnow.space/api/v0.1/countries/positions`
* Cities API (by country): `https://countriesnow.space/api/v0.1/countries/cities`

### 📝 License

This project is licensed under the [MIT License](LICENSE).


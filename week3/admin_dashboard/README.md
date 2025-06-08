
# Learnt and build a React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More

Reference: [YouTube Tutorial](https://youtu.be/jx5hdo50a2M?si=k1Nbv3jWiOFEey03)


## 🛠 Installation & Setup Guide

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/admin_dashboard.git
cd admin_dashboard
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Syncfusion License Key

In your `index.js`, import and register the license key:

```js
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('YOUR_LICENSE_KEY_HERE');
```

> You can also place the key in a `.env` file as:
>
> ```
> REACT_APP_SYNCFUSION_LICENSE=YOUR_LICENSE_KEY_HERE
> ```
>
> And register using:
>
> ```js
> registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE);
> ```

### 4. Run the App

```bash
npm start
```

The app will open in your default browser at `http://localhost:3000`.

---

Let me know if you'd like to add environment setup or `.gitignore` guidelines too!

```

School App
This is a School App built using React and Vite, utilizing modules such as react-router-dom and react-icons. The project is styled with both normal stylesheets and Tailwind CSS.

Table of Contents
Installation
Project Structure
Dependencies
Usage
Styling
Components
Pages

Project Structure
The project is organized into the following structure:

school-app/
├── public/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Banner.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── Academics.jsx
│   │   ├── Admissions.jsx
│   │   ├── Contact.jsx
│   │   ├── Faculty.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── tailwind.css
├── package.json
├── tailwind.config.js
└── vite.config.js



Dependencies
This project uses the following main dependencies:

React
Vite
React Router DOM
React Icons
Tailwind CSS
Usage
To navigate through the application, use the navigation bar at the top of the app. The app consists of multiple pages including About Us, Academics, Admissions, Contact, Faculty, Gallery, and Home.

Styling
The application uses a combination of normal stylesheets and Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.

Tailwind CSS
Tailwind CSS is set up in the project with a tailwind.css file and configured in tailwind.config.js. The main styles are imported into index.css.

Components
Navbar
Located at src/assets/components/Navbar.jsx, the Navbar component is used to navigate through different pages of the application.

Banner
Located at src/assets/components/Banner.jsx, the Banner component displays the main banner of the home page.

Pages
The application includes the following pages, located in the src/pages directory:

About Us
Provides information about the history, vision, mission, and infrastructure of the school.

Academics
Details the curriculum for different grades, admission process, and criteria.

Admissions
Contains information about the admission process, criteria, and important dates.

Contact
Displays the contact information of the school along with a map and a contact form.

Faculty
Lists the faculty members of the school.

Gallery
Showcases images and videos of various school events and activities.

Home
The main landing page of the application, featuring a welcome message and overview of the school.
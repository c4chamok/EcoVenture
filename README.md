# EcoVenture Experiences 🌿

## Purpose
**EcoVenture Experiences** is a responsive blog website designed to showcase eco-friendly travel adventures for mountain treks. The platform enables users to explore, learn, and consult with experts about these experiences. It has features like user authentication, profile management, and an interactive interface.

## Live Demo
[View the Live Website](https://ecoventure-b0947.firebaseapp.com/)

---

## Key Features
1. **Navbar**: This includes links like Home, Update Profile, and My Profile pages, with options for Login/Logout and a user profile photo that shows the username on hover.
2. **Dynamic Adventure Cards**: Homepage has a slider for showing eco-adventures and a section to display dynamic cards with JSON data.
3. **Authentication**: Login and registration system with Google authentication, email/password validation, and a forgot password feature.
4. **Private Routes**: Access to Adventure Details and My Profile or Update Profile pages is restricted to logged-in users to secure individual interactions.
5. **Adventure Details**: A detailed page for each adventure includes a "Talk with Expert" button that opens Google Meet or displays consultation hours based on the time.

### React Concepts:
- **React Components**: Utilized components like Navbar, Footer, Adventure Cards, and Adventure Details for modular and reusable UI.
- **React Context API**: Used to manage user authentication and profile data without prop drilling across the application.
- **React Hooks**: React hooks like `useState`, `useEffect`, `useContext`, `useLocation`, and `useNavigate` for efficient state and navigation management.

### Packages Used:
- **React Router**: For implementing multi-page navigation and route protection.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **DaisyUI**: Tailwind-based component library for pre-styled components.
- **Toastify**: For displaying toast notifications for success and error messages.
- **React Icons**: For integrating customizable icons across the application.
- **AOS**: To add smooth scroll animations for an engaging user experience.
- **Swiper**: For creating responsive and interactive sliders.
- **React Stars**: For rendering star ratings dynamically.
- **Firebase**: Backend service for user authentication and profile management.

---

## Running EcoVenture Experiences Locally

### Prerequisites
1. **Node.js**: Ensure you have Node.js installed on your system. You can download it [here](https://nodejs.org/).
2. **Git**: Make sure Git is installed for cloning the repository. Download it [here](https://git-scm.com/).
3. **Firebase Project**: You need to create a Firebase project to set up authentication.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/ecoventure-experiences.git
cd ecoventure-experiences
```

---

### Step 2: Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

---

### Step 3: Firebase Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Set up **Firebase Authentication**:
   - Navigate to **Authentication** > **Sign-in Method**.
   - Enable **Email/Password** and **Google** sign-in methods.
4. Create a **Firebase Web App**:
   - Go to **Project Settings** > **General** > **Your Apps**.
   - Click **Add App** and select **Web**.
   - Copy the Firebase configuration object.

---

### Step 4: Add Firebase Configuration
1. Create a file named `.env` in the root directory.
2. Add the Firebase configuration to the `.env` file:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

---

### Step 5: Start the Development Server
Run the following command:
```bash
npm start
```
This will start the application, and you can view it in your browser at `http://localhost:3000`.

---

### Additional Notes
- **Environment Variables**: Ensure `.env` is added to `.gitignore` to prevent accidental uploads of sensitive Firebase credentials.

Enjoy exploring **EcoVenture Experiences** locally! 🚀

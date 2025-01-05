# EcoVenture Experiences 🌿

## Purpose
**EcoVenture Experiences** is a responsive blog website designed to showcase eco-friendly travel adventures for mountain treks. The platform enables users to explore, learn, and consult with experts about these experiences. It has features like user authentication, profile management and  interactive interface.

## Live Demo
[View the Live Website](https://ecoventure-b0947.firebaseapp.com/) 

---

## Key Features
1. **Navbar**: This includes links like Home, Update Profile, and My Profile pages, with options for Login/Logout and a user profile photo which shows the username on hover.
2. **Dynamic Adventure Cards**: Homepage has a slider for showing eco-adventures and a section to display dynamic cards with JSON data.
3. **Authentication**: Login and registration system with Google authentication, email/password validation and a forgot password feature.
4. **Private Routes**: Access to Adventure Details and My Profile or Update Profile pages is restricted to logged-in users to secure user indivisual interactions.
5. **Adventure Details**: A detailed page for each adventure which includes a "Talk with Expert" button that opens Google Meet or displays consultation hours based on the time.

### React Concepts:
- **React Components**: Utilized components like Navbar, Footer, Adventure Cards, and Adventure Details for modular and reusable UI.
- **React Context API**: Used for manage user authentication and profile data without prop drilling all over the application.
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

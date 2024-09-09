import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // State to hold form values
    const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });
    // State to hold validation errors
    const [errors, SetErrors] = useState({});

    // Function to handle input changes
    const handleChange = function(e) {
        // Update the corresponding form value in state
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    // Function to handle form submission
    const handleSubmit = function(e) {
        e.preventDefault(); // Prevent default form submission behavior
        // Validate form values and set errors if any
        SetErrors(validate(formValues));
        // Log form values and errors
        if(Object.keys(errors).length===0){
          alert('Form Submitted.')
        }
    }

    // Function to validate form values
    const validate = function(values) {
        const error = {};
        const username = values.username;
        const email = values.email;
        const password = values.password;

        // Validate username
        if (!username) {
            error.username = 'Please input username.';
        }

        // Validate email
        if (!email) {
            error.email = 'Please input email.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error.email = 'Please input a valid email format';
        }

        // Validate password
        if (!password) {
            error.password = 'Please input password.';
        } else if (password.length < 5) {
            error.password = 'Password must be at least 5 characters long.';
        } else if (!/[A-Z]/.test(password)) {
            error.password = 'Password must contain at least one uppercase letter.';
        } else if (!/[a-z]/.test(password)) {
            error.password = 'Password must contain at least one lowercase letter.';
        } else if (!/[0-9]/.test(password)) {
            error.password = 'Password must contain at least one number.';
        } else if (!/[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|-]/.test(password)) {
            error.password = 'Password must contain at least one special character.';
        }

        return error;
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Username Input */}
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name='username'
                    value={formValues.username}
                    onChange={handleChange}
                />
                {/* Display username error if present */}
                {(errors.username) && <span>{errors.username}</span>}

                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                />
                {/* Display email error if present */}
                {(errors.email) && <span>{errors.email}</span>}

                {/* Password Input */}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name='password'
                    value={formValues.password}
                    onChange={handleChange}
                />
                {/* Display password error if present */}
                {(errors.password) && <span>{errors.password}</span>}

                {/* Submit Button */}
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default App

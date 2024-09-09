import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [formValues,setFormValues] = useState({username: "", email: "", password: "" });
    const [errors, SetErrors] = useState({});
    const handleChange = function(e){
      console.log(e.target.name,e.target.value);
      console.log(e.target);
      setFormValues({...formValues,[e.target.name] :e.target.value});
    }
    const handleSubmit = function(e){
      e.preventDefault();
      SetErrors(validate(formValues))
      console.log(formValues)
      console.log(errors)
    }
    const validate = function(values){
      const error = {};
      const username = values.username
      const email= values.email;
      const password = values.password;
      if(!username){
        error.username = 'Please input username.';
      }
      if(!email){
        error.email = 'Please input email.';
      }
      else if(!/^[\w.-]+@[\w.-]+\.\w+$/.test()){
        error.email = 'Please input a valid email format'
      }
      if(!password){
        error.password = 'Please input password.';
      }
      else if(password.length < 5){
        error.password = 'Password must be at least 5 characters long.'
      }
      else if (!/[A-Z]/.test(password)){
       error.password=  'Password must contain at least one uppercase letter.';
      } 
      else if (!/[a-z]/.test(password))
        {error.password =  'Password must contain at least one lowercase letter.';}
      else if (!/[0-9]/.test(password)) 
        {error.password = 'Password must contain at least one number.';}
      else if (!/[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|-]/.test(password))
        {error.password = 'Password must contain at least one special character.';}
      return error;
    }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' value={formValues.username} onChange={handleChange} />
        {(errors.username)&&<span>{errors.username}</span>}
        <label htmlFor="email">Email</label>
        <input type="text" name='email' value={formValues.email} onChange={handleChange} />
        {(errors.email)&&<span>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={formValues.password} onChange={handleChange}/>
        {(errors.password)&&<span>{errors.password}</span>}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App

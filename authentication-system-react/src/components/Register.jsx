import { useState } from "react";
import {register} from '../Api.jsx';

import React from 'react';

const Register = () => {
    const [form,setForm] = useState({email: '', username: '', password: ''})
    const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value})
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await register(form);
            console.log(response)
            console.log(response.data.message)
            setForm({email: '', username: '', password: ''})
        }
        catch(err){
            console.error(err.response.data.message)
            setForm({email: form.email, username: form.username, password: ''})
        }
        
        

    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label >Username</label>
        <input type="text" name="username" value={form.username} onChange = {handleChange}/>
        <label >Email</label>
        <input type="text" name="email" value={form.email} onChange = {handleChange}/>
        <label >Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange}/>
        <input type="submit" />
    </form>
    </>
  );
};

export default Register;
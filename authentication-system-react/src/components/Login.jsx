import React from 'react';
import { useState } from 'react';
import { login } from '../Api';

const Login = () => {
    const [form,setForm] = useState({email: '', password: ''})
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await login(form);
            console.log(response);
            setForm({email: '', password: ''});
        }
        catch(err){
            console.error(err.response?.data?.message || err.message);
            setForm({email: form.email, password: ''})
        }
    }
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label >Email</label>
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <label >Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange}/>
        <input type="submit" />
    </form>
    </>
  );
};

export default Login;
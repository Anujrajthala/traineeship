import React from 'react';
import styles from './FormStyles.module.css'
import {useForm} from 'react-hook-form'


const Form = () => {
    const {register, handleSubmit, formState:{errors}, getValues} = useForm();
    
    const onSubmission = function(data){
        console.log('Form SUbmitted')
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmission)}>
        <label htmlFor="firstName">First Name</label>
        <input type="text"{...register('firstName',{
            required: 'Please input your first name.'
        })}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <label htmlFor="lastName">Last Name</label>
        <input type="text"  {...register('lastName',{
            required: 'Please input your last name.'
        })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <label htmlFor="email">Email</label>
        <input type="text" {...register('email',{
            required: 'Please input your email',
            pattern: {
                value: /^[\w.-]+@[\w.-]+\.\w+$/,
                message: 'Please input valid email'
            }
        })} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password',{
            required: 'Please input password',
            minLength: {
                value: 8,
                message: 'Minimum length should be 8'
            },
            validate: {
                hasUppercase: (value) => /[A-Z]/.test(value) || 'Password must contain at least one uppercase character.',
                hasSpecialChar: (value) => /[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|-]/.test(value) || 'Password must contain at least one special character.',
              },
        })} />
        {errors.password && <p>{errors.password.message}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"  {...register('confirmPassword',{
            required: "Please input your password",
            validate: (value)=>{
                if (value != getValues('password')){
                    return 'Please enter the same password.'
                }
                return true
            }
        })} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <input type="submit" />
    </form>
  );
};

export default Form;
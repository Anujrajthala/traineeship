import React from 'react';
import { useState } from 'react';


const ExpenseForm = ({onAddExpense}) => {
    const [amount,setAmount]= useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')

    const handleSubmit= (e)=>{
        e.preventDefault();
        onAddExpense({amount,category,description,id: Date.now()});
        setAmount("");
        setCategory("");
        setDescription("");
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='amount' name='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <input type="text" placeholder='category' name='category' value={category} onChange={(e)=>setCategory(e.target.value)} />
        <button type= 'submit'>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
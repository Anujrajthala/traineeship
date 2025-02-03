import React from 'react';

const ExpenseList = ({expenses}) => {
    console.log(`filteredExp: ${expenses}`);
  return (
    <div>
        <h3>Expense List</h3>
        <ul>
            {expenses.map((expense)=>{
                return <li key = {expense.id}>{expense.amount}-{expense.category}({expense.description})</li>
            })}
            
        </ul>
    </div>
  );
};

export default ExpenseList;
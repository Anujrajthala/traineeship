import React from 'react';

const ExpenseFilter = ({setFilter}) => {
  return (
    <div>
      <label >Filter by Category</label>
      <select  onChange={(e)=> setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
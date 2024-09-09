import { useState } from 'react';  // Importing useState hook from React
import reactLogo from './assets/react.svg';  // Importing an image file (logo)
import viteLogo from '/vite.svg';  // Importing another image file (logo)
import './App.css';  // Importing the CSS file for styling

function App() {
  // Declare state variables: 'todos' for the list of tasks and 'inputValue' for the current input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new task to the 'todos' list
  const addNewTask = function() {
    // Update the 'todos' state by adding the new task and reset 'inputValue' to an empty string
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  // Function to delete a task from the 'todos' list based on its index
  const deleteTask = function(index) {
    // Create a copy of the 'todos' array, remove the task at the specified index, and update the state
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {/* Input field for entering a new task, with 'inputValue' bound to it */}
      <input 
        type="text" 
        value={inputValue} 
        placeholder='Enter new task' 
        onChange={(e) => { setInputValue(e.target.value); }} 
      />
      
      {/* Button to add the new task by triggering 'addNewTask' function */}
      <button onClick={addNewTask}>Add</button>
      
      {/* Render the list of tasks ('todos') and a delete button for each task */}
      {todos.map((todo, index) => 
        <li key={index}>
          {todo}  {/* Display the task */}
          {/* Button to delete the task by triggering 'deleteTask' function */}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      )}
    </>
  );
}

export default App;  // Export the App component as the default export

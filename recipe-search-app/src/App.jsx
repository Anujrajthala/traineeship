import { useEffect, useState } from 'react'; // Importing React hooks
import axios from 'axios'; // Importing axios for making HTTP requests
import './App.css'; // Importing CSS for styling

function App() {
  // State to manage the name of the dish input by the user
  const [dishName, setDishName] = useState('');

  // State to store the fetched recipe data from the API
  const [recipeData, setRecipeData] = useState({});

  // State to store the list of ingredients extracted from the recipe
  const [ingredients, setIngredients] = useState([]);

  // useEffect hook to fetch recipe data whenever dishName changes
  useEffect(() => {
    // Making an HTTP GET request to the API with the dishName as a query parameter
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`)
      .then((response) => {
        // Logging the response data for debugging
        console.log(response.data);

        // Setting the recipeData state with the fetched data
        setRecipeData(response.data);

        // Extracting the first meal from the response
        const meal = response.data.meals ? response.data.meals[0] : null;

        // If a meal is found, process the ingredients
        if (meal) {
          const ingredientList = [];
          let i = 1;
          
          // Loop through the ingredient and measure fields to build the ingredient list
          while (meal[`strIngredient${i}`]) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            
            // Add the ingredient to the list if it's not empty
            if (ingredient.trim()) {
              ingredientList.push(`${measure} ${ingredient}`);
            }
            i++;
          }

          // Logging the ingredient list for debugging
          console.log(ingredientList);

          // Setting the ingredients state with the processed list
          setIngredients(ingredientList);
        } else {
          // Clear ingredients if no meal is found
          setIngredients([]);
        }
      })
      .catch((error) => console.error("There was an error fetching recipe data: ", error));
  }, [dishName]); // Dependency array: useEffect will run when dishName changes

  return (
    <>
      {/* Input field for the user to enter the name of the dish */}
      <input
        type="text"
        value={dishName}
        placeholder='Please enter dishName'
        onChange={(e) => setDishName(e.target.value)} // Update dishName state on input change
      />
      
      {
        recipeData.meals && recipeData.meals.length > 0
          ? (
            <div>
              {/* Displaying recipe details */}
              <h3>Recipe Name: {recipeData.meals[0]?.strMeal}</h3>
              <h3>Category: {recipeData.meals[0]?.strCategory}</h3>
              <h3>Instructions:</h3>
              <p>{recipeData.meals[0]?.strInstructions}</p>
              
              {/* Displaying ingredients list */}
              <h3>Ingredients</h3>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )
          : (
            <p>Loading Data ....</p> // Display a loading message if no recipe data is available
          )
      }
    </>
  );
}

export default App; // Exporting the App component for use in other parts of the application

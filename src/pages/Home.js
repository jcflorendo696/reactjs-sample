import {useState, useEffect} from 'react';
import Recipe from '../Recipe';

const Home = () => {

    const APP_ID = 'f275a782';
    const APP_KEY = '56535131d83dd97d5fc586adbefa5442';
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
  
    useEffect( () => {
      getRecipes();
    }, [query]);
  
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      //console.log(data.hits);
      setRecipes(data.hits);
    }
  
    const updateSearch = (e) => {
      setSearch(e.target.value);
    }
  
    const getSearch = (e) => {
       e.preventDefault(); // intercept the form submission. let reactjs handle it.
       setQuery(search);
    }


    return (
        <div class="container">
            <form className="search-form" onSubmit={ getSearch }>
                  <input className="search-bar" type="text" value={search} onChange={ updateSearch } placeholder="Beef, Fish, etc."/>
                  <button className="search-button" type="submit">Search</button>
            </form>
            
            <div className="item-wrapper">

            {recipes.map( (recipe, i) => (
            <Recipe 
                key={i} 
                name={recipe.recipe.label}
                cuisinetype={recipe.recipe.cuisineType}
                ingredients={recipe.recipe.ingredients}
                image={recipe.recipe.image}
                calories={recipe.recipe.calories}
                />
            ))}
            </div>
        </div>
    );
}


export default Home;
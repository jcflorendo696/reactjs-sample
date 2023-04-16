import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Recipe = ({name, cuisinetype, ingredients, image, calories}) => {
    return(
        <div className="item details">
            <h2>{name}</h2>
            <div className='origin'>
                <h5>Origin:</h5><p>{cuisinetype}</p>
            </div>
            
            <figure>
                <LazyLoadImage 
                    effect="blur" 
                    src={image} 
                    alt={name}
                    width="100%"
                    height="100%"
                />
            </figure>

            <h4>Ingredients:</h4>
            <ol className='ingredients'>
                {ingredients.map( (ingredient,i) => (
                    <li key={i}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}



export default Recipe;
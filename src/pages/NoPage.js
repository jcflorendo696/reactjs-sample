import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div class="container error404">
            <h1>404</h1>
            <h2>Sorry, nothing to see here!</h2>
            <p>
            <Link to="/">Go back to the home page</Link>
            </p>
        </div>
    );
}


export default NoPage;
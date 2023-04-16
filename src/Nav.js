import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <nav>
                <h5><a href="/">Sample ReactJS App</a></h5>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/*">404</Link></li>
                </ul>
            </nav>
        </header>
    );
}


export default Nav;
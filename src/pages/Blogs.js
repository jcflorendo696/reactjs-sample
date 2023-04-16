import { useState, useEffect } from 'react';
import Blogposts from './Blog-posts';

const Blogs = () => {
    const [blogposts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts);
    }

    return (
        <div className="container">
            <h1 className="mt-3">Blogpost Page</h1>
            <ul>
                <li>This is a sample blogpost page for this React website.</li>
                <li>The posts are being pulled from a dummy api and assembled the content inside the components.</li>
            </ul>
            <p>This is for example purposes only.</p><br/>
            <Blogposts posts={blogposts}/>
        </div>
    );
}


export default Blogs;
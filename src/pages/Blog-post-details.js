

const Blogpostsdetails = ({body, title}) => {

    return (
        <div className="details">
            <h2>{title}</h2>
            <time>January 1, 2023</time>
    
            <p>{body}</p>
        </div>
    );
}


export default Blogpostsdetails;
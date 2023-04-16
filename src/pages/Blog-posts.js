import Blogpostsdetails from "./Blog-post-details";



const Blogposts = ({posts}) => {
    
    console.log(posts);
    return (
        <div className="blogposts-wrapper">
            {
                posts.map( (item) => (
                    <div className='item' key={item.id}>
                        <Blogpostsdetails  body={item.body} title={item.title}/>
                    </div>
                ))
            }
        </div>
    );
}


export default Blogposts;
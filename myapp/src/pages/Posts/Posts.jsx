import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Posts.scss';
function Posts(props) {
    const[posts,setPosts] =useState([]);
    const [errorMessage,setErrorMessage]=useState('');
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        axios
          .get(url)
          .then((response) => {
            setPosts(response.data);

          }).catch(error=>{console.log(error.message);
        
        setErrorMessage(error.message);
        
        });
    },[]);
    return(
        <div >
            <h2>Posts</h2>
            <div className='post-cover'>
              {
                 posts.length>>0 ?posts.map(post=>(
                      <div key={post.id}>
                           <strong>{post.id}</strong>
                           <p>{post.title}</p>
                           <div>post.body</div>
                       </div>


                 )): <div>No Result</div>



              }



            </div>

         <div className='error-message'>{errorMessage}</div>

        </div>
    )
}
export default Posts;
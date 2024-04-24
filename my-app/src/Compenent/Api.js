// import React, { useEffect, useState } from 'react'


// const product = ()=>{
//     const[posts,setPostapi]=useState([])
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(posts => setPostapi(posts))
//     },[])
// }



// function Api() {




//   return (

//     <div>
//       <container className="text-primary" >Fetchapi</container>
//       {posts.map((post)=>
//        <div>
//         <h1>{post.title}</h1>
//         <p>{post.title}</p>
//        </div> 
    
//     )}
//     </div>
//   )
// }

// export default Api

import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const Product = () => {
    const[posts,setPostapi]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPostapi(posts))
    },[])
      return (
    <div>
      <Container className="text-primary">Fetch api</Container>
      {posts.map((post)=>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>

      </div>
    )}
    </div>
  )
}

export default Product

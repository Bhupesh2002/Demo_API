import React from 'react'
import { Outlet,Link} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';

const Products = () => {

  // let [count,setCount] = useState(0);

  // useEffect(()=>{
  //   console.log("run after the rendering!!");
  // },[]);

  return (
    <div>
      {/* <h1>Products - { count }</h1> 
       <Button variant='primary' onClick={ ()=>{ setCount(count+1) } }>Increase</Button>
      
      <Link to={ "details" }>Details</Link> */}
      {/* <Link to={ "lists" }>Link</Link> */}
      <Outlet/>
    </div>
    
  )
}

export default Products;
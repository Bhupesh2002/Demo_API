import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Mosaic} from 'react-loading-indicators'
import useFetch from './custom-hook/useFetch';

const ProductList = () => {

  // let [products,setProducts] = useState([]);
  // let [error,setError] = useState("");
  // let [loading,isLoading] = useState(true);

  // useEffect( ()=>{
  //   console.log("useEffect running...");
  //   fetch( "http://localhost:5000/products/", { method:"GET" } )
  //   .then( (response)=>{ 
  //     if(response.ok){
  //       return response.json();
  //     }
  //     else{
  //       throw new Error( "search Proper Data" );
  //     }
  //   })
  //   .then( (data)=>{ 
  //     setProducts(data) 
  //   })
  //   .catch( (error)=>{ 
  //     setError(error.message) 
  //   })
  //   .finally( ()=>{ 
  //     isLoading(false) 
  //   })
  // },[]);

  let { products, error, loading } = useFetch("https://fakestoreapi.com/Products");
  // console.log(customHook);


  if(loading){
    return (
    <center>
      <div style={ { marginTop:"200px" } }>
        <Mosaic color="#6a31cc" size="large" text="loading" textColor="#5c28b6" />
      </div>
    </center>
    )}
  else{
    return (
      <div>
        <h1 style={ { textAlign:'center',textDecoration:'underline',textTransform:'uppercase', fontFamily:'cursive sans-serif' } }>Product List</h1>
        {
           products.length !==0 && (
            <section className='products'>
          {
            products.map( (product)=>{
              return(
                <Card key={ product.id } style={{ width: '18rem' }} className='product'>
               
                  <Card.Img variant="top" 
                  src= { product.image } 
                  style={ { width:"9rem", height :"10rem",margin:"auto",marginTop:"25px"} }
                  />
                  <Card.Body>
                    <Card.Title>{ product.title }</Card.Title>
                    <Card.Text style={ {overflow:"scroll",height:"200px", textAlign:"justify"} }>
                      { product.description }
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer 
                  style={ { 
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center" }}
                  >
                    <Card.Text>${product.price} </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Footer>
                </Card>
                
  
              )
           })
          }
        </section>
           )
        }
        
        {
          error && <p> {error} </p>
        }
      </div>  
    )
  }
}

export default ProductList;
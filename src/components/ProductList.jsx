import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductList = () => {

  let [products,setProducts] = useState([]);

  useEffect( ()=>{
    console.log("useEffect running...");
    fetch( "http://localhost:5000/products", { method:"GET" } )
    .then( (response)=>{ return response.json()})

    .then( (data)=>{ setProducts(data) } )
  },[]);

  return (
    <div>
      <h1 style={ { textAlign:'center',textDecoration:'underline',textTransform:'uppercase', fontFamily:'cursive sans-serif' } }>Product List</h1>
      <section className='products'>
        {
          products.map( (product)=>{
            return(
              <Card style={{ width: '18rem' }} className='product'>
             
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
    </div>
    
  )
}

export default ProductList;
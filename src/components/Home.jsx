import React from 'react'
import useFetch from './custom-hook/useFetch';
import { Mosaic } from 'react-loading-indicators';

const Home = () => {



  let {products,loading} = useFetch("https://fakestoreapi.com/Products")
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
          <h1>Home - {products.length}</h1>
        </div>
      )
    }
}

export default Home;
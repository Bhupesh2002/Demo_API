import './App.css'
import Todoapp from './components/TodoApp';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Products from './components/Products';
// import { use } from 'react'
import ProductsDetails from './components/ProductDetails'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';


function App() {



  return (
    <>
      <div className='app'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element= { <Home/> } />
            <Route path='/products' element= { <Products/> }>
              <Route index element = { <ProductList/> } />
              <Route path='lists' element = { <ProductList/> } />
              <Route path='details' element = { <ProductsDetails/> }/>
            </Route>
            <Route path="/login/:newUser"  element= { <Login/> } />
            <Route path='/todoapp' element= { <Todoapp/> } />
            <Route path='/sign-up' element= { <Signup/> } />
            <Route path='*' element={ <NotFound/> }/>
          </Routes>
        </Router>
      </div> 
    </>
  )
}

export default App;

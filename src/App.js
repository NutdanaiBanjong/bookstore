import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Products from './components/Products'
import Home from './components/Home'
import Author from './components/Author'
import { useState } from "react"
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Harry1 from '../src/components/image/Harry1.jpg'
import Harry2 from '../src/components/image/Harry2.jpg'
import Harry3 from '../src/components/image/Harry3.jpg'
import Harry4 from '../src/components/image/Harry4.jpeg'
import Harry5 from '../src/components/image/Harry5.jpeg'
import Harry6 from '../src/components/image/Harry6.jpeg'
import Harry7 from '../src/components/image/Harry7.jpeg'

function App() {
  const bookData = [
    { id: 1, name: 'แฮร์รี่พอตเตอร์กับศิลาอาถรรพ์',image:Harry1,value:100,amount:0},
    { id: 2, name: 'แฮร์รี่พอตเตอร์กับห้องแห่งความลับ',image:Harry2,value:100,amount:0},
    { id: 3, name: 'แฮร์รี่พอตเตอร์กับนักโทษแห่งอัซ...',image:Harry3,value:100,amount:0},
    { id: 4, name: 'แฮร์รี่พอตเตอร์กับถ้วยอัคนี',image:Harry4,value:100,amount:0},
    { id: 5, name: 'แฮร์รี่พอตเตอร์กับภาคีนกฟีนิกซ์',image:Harry5,value:100,amount:0},
    { id: 6, name: 'แฮร์รี่พอตเตอร์กับเจ้าชายเลือดผสม',image:Harry6,value:100,amount:0},
    { id: 7, name: 'แฮร์รี่พอตเตอร์กับเครื่องรางยมทูต',image:Harry7,value:100,amount:0}
  ];
const [cart,setCart] = useState([]);
const [price,setPrice] = useState(0);

const addCart = (bookFromCart) => {
    const newbook = cart.findIndex(book => book.id === bookFromCart.id)
    // console.log(newbook,'newbook')
    if ( newbook < 0 ) {
      bookFromCart['amount'] = bookFromCart.amount + 1
      setCart(cart => [...cart, bookFromCart]);
    }else { 
      cart[newbook].amount = cart[newbook].amount + 1 
    }
    setPrice (price + bookFromCart.value)
    console.log(price,'ราคา')
    // console.log(cart,'cart')
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/products" element={<Products
          bookData={bookData} 
          addCart={addCart} 
          cartToChild={cart} 
          priceToChild={price}/>}>
        </Route>
        <Route path="/cart" element={<Cart 
          cartToChild={cart} 
          priceToChild={price}/>}>
        </Route>
        <Route path='/author' element={<Author/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;

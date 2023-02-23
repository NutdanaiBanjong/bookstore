import Promotion from "./promotion";
import Card from "./Card";
import Harry1 from './image/Harry1.jpg'
import Harry2 from './image/Harry2.jpg'
import Harry3 from './image/Harry3.jpg'
import Harry4 from './image/Harry4.jpeg'
import Harry5 from './image/Harry5.jpeg'
import Harry6 from './image/Harry6.jpeg'
import Harry7 from './image/Harry7.jpeg'
import Navbar from "./Navbar";
import { useState } from "react";

const Main =()=>{
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
        // console.log(bookFromCart.value,'value')
      }
    return(
        <div className="">
            <Navbar/>
            <div className="px-52">            
                <Promotion cartToChild={cart} priceToChild={price}/>
                <div className="col-span-2 space-y-5">
                    <h1 className="text-5xl italic">All Harry Potter Novels</h1> <hr className="border border-black"/>
                    <Card bookData={bookData} addCart={addCart}/>
                </div>
            </div>
        </div>
        
    )
}

export default Main;
import Harry1 from './image/Harry1.jpg';
import Harry2 from './image/Harry2.jpg';
import Harry3 from './image/Harry3.jpg';
import Harry4 from './image/Harry4.jpeg';
import Harry5 from './image/Harry5.jpeg';
import Harry6 from './image/Harry6.jpeg';
import Harry7 from './image/Harry7.jpeg';
import Price from './price';
import { useState } from 'react';

const initialArtists = [
    { id: 1, name: 'แฮร์รี่พอตเตอร์กับศิลาอาถรรพ์',ima:Harry1,price:100 },
    { id: 2, name: 'แฮร์รี่พอตเตอร์กับห้องแห่งความลับ',ima:Harry2,price:100 },
    { id: 3, name: 'แฮร์รี่พอตเตอร์กับนักโทษแห่งอัซ..',ima:Harry3,price:100 },
    { id: 4, name: 'แฮร์รี่พอตเตอร์กับถ้วยอัคนี',ima:Harry4,price:100 },
    { id: 5, name: 'แฮร์รี่พอตเตอร์กับภาคีนกฟีนิกซ์',ima:Harry5,price:100 },
    { id: 6, name: 'แฮร์รี่พอตเตอร์กับเจ้าชายเลือดผสม',ima:Harry6,price:100 },
    { id: 7, name: 'แฮร์รี่พอตเตอร์กับเครื่องรางยมทูต',ima:Harry7,price:100},
  ];
  

const Card=()=>{
    const [artists, setArtists] = useState([]);
    console.log(artists)
    return(
    <div classNam="">
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[0].ima} className="w-full h-5/6" alt=""/>
                <Price title={initialArtists[0].name} price={initialArtists[0].price+' THB'} /> 
                <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[0].id, name: initialArtists[0].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button>  
            </div> 
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[1].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[1].name} price={initialArtists[1].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[1].id, name: initialArtists[1].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[2].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[2].name} price={initialArtists[2].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[2].id, name: initialArtists[2].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[3].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[3].name} price={initialArtists[3].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[3].id, name: initialArtists[3].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[4].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[4].name} price={initialArtists[4].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[4].id, name: initialArtists[4].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[5].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[5].name} price={initialArtists[5].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[1].id, name: initialArtists[5].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
            <div className="bg-white rounded-lg flex flex-col">
                <img src={initialArtists[6].ima} className="w-full h-5/6" alt=""/>
                    <Price title={initialArtists[6].name} price={initialArtists[6].price+' THB'} /> 
                    <button onClick={() => {setArtists
                    ([...artists,{ id: initialArtists[6].id, name: initialArtists[6].name}]);}} className="flex justify-center bg-green-500 rounded-b-lg">
                        Add to cart</button> 
            </div>
        </div>
    </div>
    )

}
export default Card ;
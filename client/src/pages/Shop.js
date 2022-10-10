import React,{useState} from 'react'
import Header from '../components/Header';
import ShopItemCard from "../components/ShopItemCard"
import Footer from "../components/Footer"

import {shop} from "../data"
import Cart from './Cart';


import {useLocation} from 'react-router-dom';


const Shop = () => {

  const location  = useLocation();
  console.log(location.state.userData)
  // let userData = {
  //   username: ""
  // }
  // if(location.state.userData){

  // }

  const {items,title} = shop;

  const [cart , setCart] = useState([])


  
  
  const updateCart=(cartItem)=>{
    console.log(cartItem)
    if(cart.indexOf(cartItem)!==-1) return;
    setCart([...cart,cartItem])
  }

  const handleChange=(item,d)=>{
    const ind = cart.indexOf(item)
    const arr = cart;
    arr[ind].amount +=d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr])
  }
  


  return (
    <div className='bg-neutral-500 h-[2600px] w-full max-w-[1400px] '>
      <Header />
      <div className='pt-16 flex flex-col'>
        <h1 className='h2 text-center text-white -mb-[40px]'>{title} <span className='text-primary-200'>.</span></h1>


        <div className='shop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 m-4'>
          {items.map((item,idx)=>(
            <div className='m-auto' key={item.key}><ShopItemCard item={item} updateCart={updateCart}/></div>
          ))}
        </div>

        <div>
          <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        </div>
    </div>
    

    
    <Footer />
    </div>
    

    
  )
}

export default Shop
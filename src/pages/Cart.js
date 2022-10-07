import React,{useState,useEffect} from 'react'

import { useNavigate } from 'react-router-dom'




const Cart = ({cart,setCart,handleChange}) => {

  
  const navigate = useNavigate();
  const [price, setPrice] = useState(0)

  const payment = () =>{
    navigate("/paymentPage",{state:{cart}})
  }

  const handleRemove=(id)=>{
    const arr = cart.filter((item)=>item.key!==id);
    setCart(arr)
    handlePrice();
  }

  const handlePrice=()=>{
    let ans = 0;
    cart.map((item)=>(ans+=item.amount * item.price))
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice();
  })

  return (
    <div className='h2 text-white'>
      <h1 className='h2 text-white text-center m-6'>Cart</h1>
      <div className='m-4 p-0.5'>
        {cart.map((item)=>(
          <div className="flex justify-between items-center p-0.5 " key={item.key}>
            <div className='flex items-center w-[300px]'>
              <img src={item.url} className="h-[90px] rounded-lg mr-2" alt="" />
              <p className='text-lg'>{item.name}</p>
            </div>

            <div className='flex items-center'>
              <button className='btn btn-sm btn-primary text-black rounded-full w-[20px]' onClick={()=> handleChange(item,1)}>+</button>
              <button className='text-[25px] font-light m-2'>{item.amount}</button>
              <button className='btn btn-sm btn-primary text-black rounded-full w-[20px]' onClick={()=> handleChange(item,-1)}>-</button>
            </div>

            <div className='flex'>
              <span className='text-lg'><span className='text-primary-200'>₹ </span>{item.price}</span>
              <button className='btn btn-sm w-8 rounded-lg ml-3 btn-secondary' onClick={()=> handleRemove(item.key)}>Remove</button>

            </div>
          </div>
        ))}

          <hr className='' />
          <hr className='' />
        <div className="flex justify-between mt-5">
          <span>Total price of your cart </span><span className='text-primary-200'>₹ {price}</span>
        </div>

        

      </div>

      <div className='flex justify-center'>
        
        <button onClick={payment} className='btn btn-primary text-black p-4 rounded-lg'>check out </button>
      </div>

    </div>
    
  )
}

export default Cart
import React,{useState,useEffect} from 'react'






const Cart = ({cart,setCart,handleChange}) => {

  const [price, setPrice] = useState(0)

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
      <div className='m-4 border border-red-300'>
        {cart.map((item)=>(
          <div className="flex justify-between" key={item.key}>
            <div>
              <img src={item.url} className="h-[50px]" alt="" />
              <p>{item.name}</p>
            </div>

            <div>
              <button onClick={()=> handleChange(item,1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={()=> handleChange(item,-1)}>-</button>
            </div>

            <div>
              <span>{item.price}</span>
              <button onClick={()=> handleRemove(item.key)}>Remove</button>
            </div>
          </div>
        ))}

          <hr />
        <div>
          <span>Total price of your cart </span><span>Rs-{price}</span>
        </div>

        

      </div>

    </div>
    
  )
}

export default Cart
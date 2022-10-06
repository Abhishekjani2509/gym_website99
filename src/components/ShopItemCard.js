import React,{useState,useEffect} from 'react'

const ShopItemCard = ({item,updateCart}) => 
{
  const [itemNumber , setItemNumber] = useState(0)
  const [cartItems , setCartItems] = useState({})
  
  // useEffect(()=>{
  //   updateCart(cartItems)
  // },[itemNumber])
  
  // console.log(cartItems)

  const quantity = itemNumber;
    // console.log(props)
    const {name,price,url,discription,key} = item;
    // console.log(item)



  return (
    <div className='w-[300px] md:w-[300px] lg:w-[330px]  border-pink-000 rounded-md bg-neutral-800 min-h-[390px] text-black p-4'>
    {/* <div className='w-[300px] md:w-[300px] lg:w-[330px]  border-pink-000 rounded-md bg-neutral-800 h-[390px] h-[360px] text-black p-1'> */}
      <div className='flex items-between'>
      </div>
      
      <div className=''>
          <img src={url} alt="" className='h-[230px] object-cover m-auto  rounded-lg p-1' style={{objectFit:"fill",width:"270px"}} />
          {/* <h1 className='h3 text-white '>{name}</h1>
          <h2 className='h5 text-white '>{price}</h2> */}

          <div className='flex justify-between text-[28px]'>
            <h1 className='font-medium text-white max-w-[300px] overflow-hidden'>{name}</h1>
            <h2 className='text-slate-400 '>{price}₹</h2>
          </div>
          <div className='text-white text-sm'>{discription}</div>


          <div className='pt-0 flex justify-center m-2'>
            <button onClick={()=>updateCart(item)} className='btn btn-sm btn-primary'>+ Add to cart</button>
              
            {/* <button onClick="" className='btn btn-sm btn-primary'>+ Add to cart</button> */}
          </div>


      </div>
    </div>
  )
}

export default ShopItemCard
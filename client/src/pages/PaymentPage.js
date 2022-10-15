import React,{useState} from 'react'
import axios from "axios"
import {useLocation} from 'react-router-dom';


const PaymentPage = (props) => {

const location  = useLocation();
const cart = (location.state.cart)

console.log(cart)


  const [signupState, setSignupState] = useState({
    username:"",
    phone:"",
    email:"",
    // password:"",
    address:"",
})

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setSignupState({...signupState , [name] : value})
    console.log(signupState)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(signupState)
    // axios.post("/payment", cart)
    axios.post("/payment",signupState)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }


  // const cart = (location.state.cart)
  console.log(cart)
  let total = 0;
  cart.map((i)=>{
    {total +=parseInt(i.price) * i.amount}
  })
  return (
    <div className='bg-neutral-200'>

      <div className='flex flex-col md:flex-row justify-between p-4 bg-neutral-500'>
        <div className='mb-4 lg:mb-0'>
          <h1 className='h2 text-white'>purchasing:</h1>
          {cart.map((i)=><h1 className='text-white text-[22px] m-2'>{i.name} x {i.amount}</h1>)}
        </div>

        <div>
          <h1 className='h2 text-white'>Grand total:</h1>
          <h2 className='h2 text-primary-200'><span className='text-white'>₹</span>{total}</h2>

        </div>
      </div>


      <div className='flex flex-col items-center  bg-neutral-500 h-screen'>
      
        <form action="" onSubmit={handleSubmit} className="border border-primary-200 p-8 rounded-lg">
            <div>
                <h1 className='text-primary-200 text-3xl font-semibold my-4 h1'>Payment Details</h1>
                <label htmlFor="username" className='text-sm'>Username</label><br />
                <input type="text" value={signupState.username} onChange={handleChange} placeholder='John Snow' autoComplete='off' name="username" id="username" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2 '/>
            </div>

            <div>
                <label htmlFor="phone" className='text-sm'>Card number</label><br />
                <input type="text" value={signupState.phone} onChange={handleChange} placeholder='9982 2556 8110 0066' autoComplete='off' name="phone" id="phone" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'/>
            </div>



            <div>
                <label htmlFor="email" className='text-sm'>Email</label><br />
                <input type="text" value={signupState.email} onChange={handleChange} placeholder='example@gmail.com' autoComplete='off' name="email" id="email" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'  />
            </div>

            {/* <div>
            <label htmlFor="password" className='text-sm'>Password</label>
            <input type="password" value={signupState.password} onChange={handleChange} placeholder='Test@1234' autoComplete='off' name="password" id="password" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'/>
            </div> */}

            <div>
                <label htmlFor="address" className='text-sm'>Address</label><br />
                <textarea type="text" value={signupState.address} onChange={handleChange} placeholder='Jagruti Hall, Kasthurba Cross Rd Number 3, Chinchpada, Borivali East, Mumbai, Maharashtra 400066' rows="5" cols="30" autoComplete='off' name="address" id="address" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'/>
            </div>


            <input type="submit" name="" id='signup' value="Pay" className='bg-green-500 w-full h-10 mt-3 cursor-pointer rounded-md text-white hover:bg-green-500 hover:outline outline-2 outline-green-500 outline-offset-2 text-sm' />



        </form>
      </div>



    </div>
  )
}

export default PaymentPage
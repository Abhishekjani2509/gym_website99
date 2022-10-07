import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [loginState, setLoginState] = useState({
    email:"",
    password:"",
  })

  const navigate = useNavigate();

  const signupPage = () =>{
    navigate('/signup')
  }

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setLoginState({...loginState , [name] : value})
    // console.log(loginState)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(loginState)
  }



  return (

    
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      <div id='form' className='block bg-neutral-500 p-6 rounded-xl shadow-md w-90 lg:w-[500px] md:w-[400px] text-white h-[500px]'>
        <form action="" onSubmit={handleSubmit}>



            <div>
                <h1 className='text-primary-200 text-3xl font-semibold my-4 h1'>Log in</h1>
                <label htmlFor="email" className='text-sm'>Email</label><br />
                <input type="text" value={loginState.email} onChange={handleChange} placeholder='example@gmail.com' autoComplete='off' name="email" id="email" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'  />
            </div>

            <div>
            <label htmlFor="password" className='text-sm'>Password</label>
            <input type="password" value={loginState.password} onChange={handleChange} placeholder='Test@1234' autoComplete='off' name="password" id="password" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2'/>
            </div>

            


            {/* <button type="submit" className='bg-neutral-500 text-white'>Login</button> */}

            <input type="submit" name="" id='signup' value="Let's get started" className='bg-green-500 w-full h-10 mt-3 cursor-pointer rounded-md text-white hover:bg-green-500 hover:outline outline-2 outline-green-500 outline-offset-2 text-sm' />

            <p className='test-xs my-2 mt-40'>Don't have a account? <button onClick={signupPage} className='text-green-600 hover:text-green-400'>login</button></p>


        </form>

        
      </div>



      {/* <br /><br /><br /><br />
      <h2>alreay have a account? login now!</h2>
      <button onClick={loginPage} className='bg-neutral-500 text-white'>Login</button> */}

    </div>





    // <div className='flex flex-col items-center'>
    //   <h1 className='h1 text-black'>login page <span className='h1 text-primary-200'>.</span></h1>
    //   <div className='m-5 p-5 rounded-lg bg-neutral-500 min-h-[500px] lg:min-w-[700px] flex flex-col justify-between items-center'>

    //     <form action="" onSubmit={handleSubmit} className="w-full p-5">
    //       <div>
    //         <label htmlFor="email">E-mail</label>
    //         <input type="text" value={loginState.email} onChange={handleChange} placeholder='example@gmail.com' autoComplete='off' name="email" id="email"/>
    //       </div>

    //       <div>
    //         <label htmlFor="password">password</label>
    //         <input type="password" value={loginState.password} onChange={handleChange} placeholder='Test@1234' autoComplete='off' name="password" id="password"/>
    //       </div>

    //       <button type="submit" className='btn btn-sm btn-primary hover:text-black transition w-full'>Login</button>


    //     </form>

    //     <div>
    //       <h2 className='text-white'>dont have account? <button onClick={signupPage} className='btn btn-sm text-white hover:text-primary-200 transition'>Sign up</button></h2>

    //     </div>


    //   </div>
    // </div>
  )
}

export default Login
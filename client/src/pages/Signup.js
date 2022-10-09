import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from "react-router-dom"

const Signup = () => {



  const [signupState, setSignupState] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const loginPage = () => {
    navigate('/login')
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignupState({ ...signupState, [name]: value })
    // console.log(signupState)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signupState)
    const { username, phone, email, password, confirmpassword } = signupState
    if (username && phone && email && password && (password === confirmpassword)) {
      // alert("correct")
      axios.post("/signupreq", signupState)
        .then(res => {
          alert(res.data.message)
          // history.push("/login")
        })

    }
    else {
      alert("error")
    }

  }




  const navigate = useNavigate();
  // const history = useHistory();
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      <div id='form' className='block bg-neutral-500 p-6 rounded-xl shadow-md w-90 lg:w-[500px] md:w-[400px] text-white'>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <h1 className='text-primary-200 text-3xl font-semibold my-4 h1'>Sign up</h1>
            <label htmlFor="username" className='text-sm'>Username</label><br />
            <input type="text" value={signupState.username} onChange={handleChange} placeholder='John Snow' autoComplete='off' name="username" id="username" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2 ' />
          </div>

          <div>
            <label htmlFor="phone" className='text-sm'>Phone number</label><br />
            <input type="text" value={signupState.phone} onChange={handleChange} placeholder='9988110066' autoComplete='off' name="phone" id="phone" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2' />
          </div>



          <div>
            <label htmlFor="email" className='text-sm'>Email</label><br />
            <input type="text" value={signupState.email} onChange={handleChange} placeholder='example@gmail.com' autoComplete='off' name="email" id="email" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2' />
          </div>

          <div>
            <label htmlFor="password" className='text-sm'>Password</label>
            <input type="password" value={signupState.password} onChange={handleChange} placeholder='Test@1234' autoComplete='off' name="password" id="password" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2' />
          </div>

          <div>
            <label htmlFor="confirmpassword" className='text-sm'>Confirm password</label>
            <input type="password" value={signupState.confirmpassword} onChange={handleChange} placeholder='Test@1234' autoComplete='off' name="confirmpassword" id="confirmpassword" className='h-8 w-full rounded-md border border-gray-700 text-sm pl-2 bg-transparent outline-green-500 shadow-sm mb-2' />
          </div>

          <div id="gender" className='text-sm mb-2'>
            <p className="mt-2">Gender</p>

            <input type="radio" name='gender' id='male' className='text-sm mx-1' /><label htmlFor="'male">Male</label>

            <input type="radio" name='gender' id='female' className='text-sm mx-1' /><label htmlFor="'Female">Female</label>

            <input type="radio" name='gender' id='Other' className='text-sm mx-1' /><label htmlFor="Other">Other</label>

          </div>


          <input type="submit" name="" id='signup' value="Sign in" className='bg-green-500 w-full h-10 mt-3 cursor-pointer rounded-md text-white hover:bg-green-500 hover:outline outline-2 outline-green-500 outline-offset-2 text-sm' />

          <p className='test-xs my-2'>Already have a account? <button onClick={loginPage} className='text-green-600 hover:text-green-400'>login</button></p>


        </form>


      </div>

    </div>

  )
}

export default Signup
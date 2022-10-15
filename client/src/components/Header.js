import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {header} from "../data"

import Nav from "../components/Nav"
import NavMobile from "../components/NavMobile"

import {RiMenu4Fill , RiCloseFill, RiCodeBoxFill} from "react-icons/ri"

const Header = ({showCart,setShowCart,userData}) => {

  const navigate = useNavigate();

  const [isActive , setIsActive] = useState(false)
  const [navMobile , setNavMobile] = useState(false)
  // const [isLogged , setIsLogged] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >80 ?setIsActive(true) : setIsActive(false);
    })
  })

  const loginPage =() =>{    
    navigate('/login');
  }

  const signupPage =() =>{    
    navigate('/signup');
  }

  // const cartClicked =() =>{
  //   navigate('/cart')
  // }




  const {logo,btnLoginText , btnSignupText} = header;
  return (
    
    <header 
      className={`${isActive?`bg-neutral-500 py[16px]` : `bg-transparent py[20px]`} fixed h-[70px] max-w-[1400px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      <a href="">
        <img className='h-[30px]' src={logo} alt="" />
      </a>

      <Nav />

      <div className='hidden lg:flex space-x-4'>
        
        {/* {userData.username === null ? <div>new</div> : <div>{userData.username}</div>} */}
        <button onClick={loginPage} className='btn btn-sm text-white hover:text-primary-200 transition  '>{btnLoginText}</button>
        <button onClick={signupPage} className='btn btn-sm btn-primary'>{btnSignupText}</button>
        {/* <button className='rounded-[] btn btn-sm btn-primary'>hi</button> */}

        {/* <button className='relative w-10 h-10 bg-primary-200 rounded-full p-1 hover:bg-green-400'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g data-name="Shopping cart"><path fill="#29bdc5" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M502.52,120.67,419.29,309.19H189.16L126.58,96.74H487A17,17,0,0,1,502.52,120.67Z"/><path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M126.63,96.77s0-37-30.79-37h-40"/><circle cx="419.08" cy="445.67" r="30.07" fill="#29bdc5" stroke="#231f20" stroke-miterlimit="10" stroke-width="15"/><circle cx="184.41" cy="445.67" r="30.07" fill="#29bdc5" stroke="#231f20" stroke-miterlimit="10" stroke-width="15"/><circle cx="32.3" cy="59.82" r="23.56" fill="#29bdc5" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/><path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M463.82,375.89a14.95,14.95,0,0,1-14.95,15H153.29l13.15-29.9,22.76-51.76h31.12l-22.76,51.76H448.87A15,15,0,0,1,463.82,375.89Z"/><line x1="419.08" x2="364.79" y1="445.67" y2="391.39" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/><line x1="184.41" x2="240.28" y1="445.67" y2="391.39" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></g></svg>
          <div className='rounded-full flex items-center justify-center bg-white text-black absolute h-5 w-5 right-0 bottom-0 translate-x-[40%] translate-y-[40%]'>3</div>
        </button> */}

      </div>


      <div className='flex'>
        <button onClick="" className='relative w-10 h-10 right-8 bg-primary-200 rounded-full p-1 hover:bg-green-400'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g data-name="Shopping cart"><path fill="#29bdc5" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M502.52,120.67,419.29,309.19H189.16L126.58,96.74H487A17,17,0,0,1,502.52,120.67Z"/><path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M126.63,96.77s0-37-30.79-37h-40"/><circle cx="419.08" cy="445.67" r="30.07" fill="#29bdc5" stroke="#231f20" stroke-miterlimit="10" stroke-width="15"/><circle cx="184.41" cy="445.67" r="30.07" fill="#29bdc5" stroke="#231f20" stroke-miterlimit="10" stroke-width="15"/><circle cx="32.3" cy="59.82" r="23.56" fill="#29bdc5" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/><path fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M463.82,375.89a14.95,14.95,0,0,1-14.95,15H153.29l13.15-29.9,22.76-51.76h31.12l-22.76,51.76H448.87A15,15,0,0,1,463.82,375.89Z"/><line x1="419.08" x2="364.79" y1="445.67" y2="391.39" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/><line x1="184.41" x2="240.28" y1="445.67" y2="391.39" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></g></svg>
          {/* <div className='rounded-full flex items-center justify-center bg-white text-black absolute h-5 w-5 right-0 bottom-0 translate-x-[40%] translate-y-[40%]'></div> */}
        </button>
        <div 
        className='lg:hidden absolute right-4'
        onClick={() =>setNavMobile(!navMobile)}
      >

        {navMobile ? (
          <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />
        ) : (
        <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer'/>)
        }
      </div>
      </div>
      {/* <div 
        className='lg:hidden absolute right-4'
        onClick={() =>setNavMobile(!navMobile)}
      >

        {navMobile ? (
          <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />
        ) : (
        <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer'/>)
        }
      </div> */}

      <NavMobile navMobile={navMobile}/>

    </header>
  );
};

export default Header;

import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'




import {BsCheckCircleFill} from "react-icons/bs"

const PlanList = ({plans}) => {
  
  const [index,setIndex] = useState(0)
  const navigate = useNavigate();
  
  const paymentPage = (cart) => {
    cart = [cart]
    // console.log(cart)
    navigate('/paymentpage',{state:{cart}});
  }

  return <div className='flex flex-col lg:flex-row item-center justify-center max-w-[1280px] mx-auto gap-y-4'>
    {plans.map((plan,currentIndex)=>{
      const {name,price,list,delay} = plan
      return <div className='w-full md:max-w-[620px] lg:max-w-[405px] rounded-sm px-4 lg:min-h-[550px]' key={currentIndex}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay={delay}
      
    >
        <div 
          onClick={() => setIndex(currentIndex)}
          className={`${currentIndex===index 
            ? `bg-neutral-500 text-white ` 
            :`bg-neutral-400/10 text-neutral-500` 
            } flex justify-center items-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100`}>
          <div className='flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center '>
            <div>
              <div className='underline text-[20px] lg:text-[30px] mb-[10px] text-center flex flex-col'>{name}</div>
              <div className='text-[35px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center'>

                <div className='leading-none'>
                  <span className='tracking-[0.1px]'>{price}</span>
                  <span className='text-[30px]'>₹</span>
                </div>
                <span className='text-sm text-normal'>/monts</span>
              </div>
            </div>
            <div>
              <ul className='flex flex-col gap-y-4 mb-8'>
                {list.map((item,idx)=>{
                  return <li className='flex items-center gap-x-[10px]' key={idx}>
                    <BsCheckCircleFill className='text-lg' />
                    <div>{item.name}</div>
                  </li>
                })}
              </ul>
              <button 
              onClick={()=>paymentPage(plan)}
              className={`${currentIndex===index 
              ? `bg-white text-neutral-500` 
              :`border border-neutral-500` 
              } btn btn-lg rounded-[1px] lg:mx-auto`}>Join now</button>
            </div>
          </div>
          

        </div>
      </div>
    })}
  </div>;
};

export default PlanList;

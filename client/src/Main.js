import React,{useState} from 'react';



// import { BrowserRouter as Router,Route} from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { Routes ,Route } from 'react-router-dom';

// import{BrowserRouter, Routes, Route} from "react-router-dom"



// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';


// import Login from './pages/Login';
// import Shop from './pages/Shop';

const App = () => {

  

  // console.log(userData.username)

  
  const [showCart , setShowCart] = useState(false)

  Aos.init({
    duration: 2500,
    delay:400,
  })
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header showCart={showCart} setShowCart={setShowCart} />
      {/* <Header userData={userData}/> */}
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>

    // <BrowserRouter>
    //   <Routes>
    //     <>
    //       <Route path="/" exact element={<Main />} />

    //       <Route path="/" exact element={<Header />} />
    //       <Route path="/" element={<Banner />} />
    //       <Route path="/" element={<About />} />
    //       <Route path="/" element={<Workouts />} />
    //       <Route path="/" element={<Pricing />} />
    //       <Route path="/" element={<Community />} />
    //       <Route path="/" element={<Faq />} />
    //       <Route path="/" element={<Join />} />
    //       <Route path="/" element={<Footer />} />
    //     </>
    //   </Routes>

    // </BrowserRouter>



  );
};

export default App;
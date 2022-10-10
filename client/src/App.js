import React from 'react';

import{BrowserRouter, Routes, Route} from "react-router-dom"



// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Main from "./Main"


import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay:400,
  })

  // const props=["hi"]

  return (

    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/paymentpage" element={<PaymentPage />} />
        </>
      </Routes>

    </BrowserRouter>



  );
};

export default App;


import React from 'react';
import Landingpage from './Pages/Landingpage';
import Snowfall from './Components/Snowfall';
import ItemDetails from './Pages/ItemDetails';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout';

const App = () => {
  return (
    <div>
      <Snowfall />
     <Routes>
      <Route path="/item-details" element={<ItemDetails/>}></Route>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Landingpage/>}></Route>
     </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import NavBar from '../Components/NavBar';
import ProductList from '../Components/ProductList';

function Frame() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      
      <div className=''>
        <NavBar />
      </div>

   
      <div className='flex-1 overflow-y-auto pt-2'>
        <ProductList />
      </div>
    </div>
  );
}

export default Frame;

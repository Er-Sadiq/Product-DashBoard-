import React from 'react';
import SideBar from './Components/SideBar';
import Frame from './Pages/Frame';

function App() {
  
  return (
    <div className="flex flex-row h-screen w-screen p-2 bg-slate-100">
      <SideBar />
      <Frame />
    </div>
  );
}

export default App;

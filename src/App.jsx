import React from 'react';
import { Outlet } from 'react-router-dom'; // This component renders the current page
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Outlet will render your HomePage or other pages */}
      <main className="">
        <Outlet /> 
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// import { BrowserRouter } from 'react-router-dom'
import { About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas } from '../components'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen';
import React, { useState, useEffect } from 'react';
const Home=()=> {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);  
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        {/* <Works/> */}
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>  
          <StarsCanvas/>
          <Footer/>
        </div>


      </div>
    </>
  )
}

export default Home



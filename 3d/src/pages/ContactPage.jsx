
import { Contact,StarsCanvas } from '../components'
import Footer from '../components/Footer'
// import { Navbar } from '../components'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    {/* <Navbar/>  */}
      <div className="relative z-0">
          <Contact/>  
          <StarsCanvas/>
          <Footer/>
        </div>
    </>
  )
}

export default ContactPage

import {Contact,StarsCanvas } from '../../components'
import Footer from '../../components/Footer'
import React from 'react'
import UserNavBar from './UserNavBar'

const ContactPage = () => {
  return (
    <>
    {/* <UserNavBar/>  */}
      <div className="relative z-0">
          <Contact/>  
          <StarsCanvas/>
          <Footer/>
        </div>
    </>
  )
}

export default ContactPage
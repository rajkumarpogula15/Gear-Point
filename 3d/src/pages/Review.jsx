import React from 'react'
import Footer from '../components/Footer'
import { About,Contact,Experience,FeedbacksPage,Hero,Navbar,Tech,Works,StarsCanvas } from '../components'

const Review = () => {
  return (
    <>
    {/* <Navbar/>  */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0">
          <FeedbacksPage/>
          <Footer/>
        </div>
    </>
  )
}

export default Review
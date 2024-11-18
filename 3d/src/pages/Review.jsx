import React from 'react'
import Footer from '../components/Footer'
import { About,Contact,Experience,FeedbacksPage,Hero,Navbar,Tech,Works,StarsCanvas } from '../components'

const Review = () => {
  return (
    <>
    {/* <Navbar/>  */}
      <div className="relative z-0">
          <FeedbacksPage/>
          <Footer/>
        </div>
    </>
  )
}

export default Review
import React from 'react'
import Footer from '../../components/Footer'
import { FeedbacksPage } from '../../components'
import UserNavBar from './UserNavBar'
const UserReview = () => {
  return (
    <>
    <UserNavBar/> 
      <div className="relative z-0">
          <FeedbacksPage/>
          <Footer/>
        </div>
    </>
  )
}

export default UserReview
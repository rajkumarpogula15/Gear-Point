
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <Outlet />
            </div>
        </>
    )
}

export default WebLayout
import {Outlet} from 'react-router-dom'
import Navbar from './NavbarComponent/Navbar'

export default function Layout(){
    return(
        <div className='layout'>
            <Navbar/>
            <div>
                <Outlet />{

                }
            </div>
        </div>
    )
}
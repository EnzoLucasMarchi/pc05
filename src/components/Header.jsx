import logo from '../assets/logo.svg'
import {Nav} from './Nav.jsx'

export const Header = () => {
    return (
        <header className='absolute w-full px-6 pt-8 flex place-content-between font-Barlow'>
            <div className=' flex place-content-between'>
            <img src={logo} alt="logo"/>
            </div>
            <Nav/>
        </header>

    )
}


import React from 'react'
import { useNavigate } from 'react-router-dom';
import swiggy_logo from '../../assests/main_page/Swiggy_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import search from '../../assests/main_page/search.png'
import offer from '../../assests/main_page/offer.png'
import help from '../../assests/main_page/help.png'
import user from '../../assests/main_page/user.png'
import cart from '../../assests/main_page/cart.png'
import './Header.css'

const Header = () => {

    // navigate to main page 
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/main_page');
    };

    return (
        <div className='headerContainer'>

            {/* swiggy logo */}
            <div className='swiggy_logo'>
                <img className='swiggyImage' src={swiggy_logo} onClick={navigateHome} />
            </div>
            {/* current location */}
            <div className='locationContainer navContainer'>
                <div className='patiaDiv'>Patia </div>
                <div className='bbsrDiv'>Bhubaneswar, Odisha, India</div>
                <div className='downArrow'><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
            <div className='navContainer rightNavContainer'>
                <div className='navContainer rightDiv'><img src={search}/> Search</div>
                <div className='navContainer offerConatiner'><img className='offerImage' src={offer}/>Offers<span className='newDiv'>NEW</span></div>
                <div className='navContainer rightDiv'><img src={help}/>Help</div>
                <div className='navContainer rightDiv'><img src={user}/>Sign In</div>
                <div className='navContainer rightDiv'><img src={cart}/>Cart</div>
            </div>
        </div>
    )
}

export default Header
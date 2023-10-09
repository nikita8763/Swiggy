import ios_app from '../../assests/iOS_app.webp'
import play_app from '../../assests/play_app.webp'
import logo_w from '../../assests/Logo_w.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-black w-full px-40'>

                <div className='flex pt-16'>
                    <div className='w-[80%] grid grid-cols-3 border-b border-gray-600 pb-5'>
                        <div>
                            <div className="text-gray-400 font-semibold">COMPANY</div>
                            <div className="mt-5 text-white leading-9 cursor-pointer mb-9">
                                <div className="hover:font-semibold">About us</div>
                                <div className="hover:font-semibold">Team</div>
                                <div className="hover:font-semibold">Careers</div>
                                <div className="hover:font-semibold">Swiggy Blog</div>
                                <div className="hover:font-semibold">Bug Bounty</div>
                                <div className="hover:font-semibold">Swiggy One</div>
                                <div className="hover:font-semibold">Swiggy Corporate</div>
                                <div className="hover:font-semibold">Swiggy Instamart</div>
                                <div className="hover:font-semibold">Swiggy Genie</div>
                                <div className="hover:font-semibold">Swiggy HDFC Bank Credit Card</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-400 font-semibold">CONTACT</div>
                            <div className="text-white mt-5 leading-9 cursor-pointer">
                                <div className="hover:font-semibold">Help & Support</div>
                                <div className="hover:font-semibold">Partner with us</div>
                                <div className="hover:font-semibold">Ride with us</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-400 font-semibold">LEGAL</div>
                            <div className="text-white mt-5 leading-9 cursor-pointer">
                                <div className="hover:font-semibold">Terms & Conditions</div>
                                <div className="hover:font-semibold">Refund & Cancellation</div>
                                <div className="hover:font-semibold">Privacy Policy</div>
                                <div className="hover:font-semibold">Cookie Policy</div>
                                <div className="hover:font-semibold">Offer Terms</div>
                                <div className="hover:font-semibold">Phishing & Fraud</div>
                                <div className="hover:font-semibold">Corporate – Swiggy Money Codes Terms and Conditions</div>
                                <div className="hover:font-semibold">Corporate - Swiggy Discount Voucher Terms and Conditions</div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer  w-[20%] border-b border-gray-600 pb-5 pl-10'>
                        <img className='border-2 border-gray-400 rounded-lg mt-2 max-w-[82%] max-h-[72%]' src={ios_app}></img>
                        <img className='border-2 border-gray-400 rounded-lg mt-9 max-w-[82%] max-h-[72%]' src={play_app}></img>
                    </div>
                </div>

                <div className='mt-7 border-b border-gray-600 pb-8'>
                    <div className='text-gray-400 font-semibold'>EXPLORE EVERY RESTAURANTS NEAR ME</div>
                    <div className='text-white mt-2 hover:font-semibold border-gray-600 pb-8 mr-32'>Explore Restaurants Near Me</div>
                </div>
                
                <div className='mt-8 flex space-x-80 pb-10'>
                    <img className='max-w-[11%] max-h-[6%]' src={logo_w}></img>
                    <div className='text-white text-xl pl-6'>© 2023 Swiggy</div>
                    <div className='text-white flex space-x-7 pl-20'>
                        <div><FontAwesomeIcon className='h-6 w-6' icon={faFacebookF} /></div>
                        <div><FontAwesomeIcon className='h-7 w-6' icon={faPinterest} /></div>
                        <div><FontAwesomeIcon className='h-7 w-6' icon={faInstagram} /></div>
                        <div><FontAwesomeIcon className='h-7 w-7' icon={faTwitter} /></div>
                    </div>
                </div>

        </div>
    )
}

export default Footer
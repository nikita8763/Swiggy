import lunch1 from '../../assests/login_page/Lunch1.webp'
import logo from '../../assests/login_page/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Image_login from '../../assests/login_page/Image-login.webp'
import CurrentLocation from './CurrentLocation'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'

const handleResults = (results) => console.log(results)

const onError = (type, status) => console.log(type, status)

const Home_page = () => {
    const [login, setlogin] = useState(false)
    const [sign, setsign] = useState(false)

    const navigate = useNavigate();
    const navigateMainPage = () => {
        navigate('/main_page');
    };

    return (
        <div className="md:flex w-full xs:flex-none">
            {/* right side */}
            <div className="w-[50%] ml-40 lg:pr-12 xl:ml-40 xl:pr-12 lg:ml-20 md:ml-12 md:pr-12 sm:ml-12 sm:pr-8 xs:ml-12">
                {/* navbar */}
                <div className='flex pt-14 justify-between'>
                    {/* swiggy logo */}
                    <div><img className='max-w-[192px] max-h-[100px] lg:w-[192px] xs:w-[150px]' src={logo} alt='logo' /></div>
                    {/* login and sign up */}
                    <div className='flex space-x-8 lg:space-x-8 md:space-x-4 sm:space-x-8 xs:pl-28 xs:space-x-4'>
                        <div onClick={() => setlogin(!login)} className='text-black font-bold lg:py-4 md:py-2 xs:py-2 cursor-pointer hover:text-orange-500'>Login</div>
                        <div onClick={() => setsign(!sign)} className='bg-black text-white lg:py-2 lg:w-28 my-2 lg:px-6 md:py-0 md:px-3 md:w-26 xs:py-0 xs:px-10 font-semibold cursor-pointer'>Sign up</div>
                    </div>
                    {login ? <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
                    <div className={login ? "fixed top-0 right-0 w-[510px] h-screen bg-white z-10 duration-500" : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-500"}>
                        <FontAwesomeIcon icon={faClose} onClick={() => setlogin(!login)} size={30} className="absolute left-11 top-8 cursor-pointer h-8 text-gray-600" />
                        <nav>
                            <ul className="flex flex-col ml-7 p-4 ">
                                <div className="text-3xl mt-16 font-semibold flex">Login<img className='w-24 -mt-5 right-24 absolute' src={Image_login} /></div>
                                <div onClick={() => setsign(!sign)} className='text-xs mt-3 pb-4 '>or <span className='text-orange-500 font-semibold cursor-pointer'>create an account</span></div>
                                <input className='border mt-5 py-5 pl-6 w-[82%] outline-none' type='text' placeholder='Phone number' />
                                <button className='mt-5 border py-3 pl-6 w-[82%] text-white bg-orange-500 font-semibold' onClick={navigateMainPage}>LOGIN</button>
                                <div className='text-xs mt-1'>By clicking on Login, I accept the <span className='font-semibold cursor-pointer'>Terms & Conditions & Privacy Policy</span></div>
                            </ul>
                        </nav>
                    </div>

                    {sign ? <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
                    <div className={sign ? "fixed top-0 right-0 w-[510px] h-screen bg-white z-10 duration-500" : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-500"}>
                        <FontAwesomeIcon icon={faClose} onClick={() => setsign(!sign)} size={30} className="absolute left-11 top-8 cursor-pointer h-8 text-gray-600" />
                        <nav>
                            <ul className="flex flex-col ml-7 p-4 ">
                                <div className="text-3xl mt-16 font-semibold flex">Sign up<img className='w-24 -mt-5 right-24 absolute' src={Image_login} /></div>
                                <div onClick={() => setlogin(!login)} className='text-xs mt-3 pb-4'>or <span className='text-orange-500 font-semibold cursor-pointer'>login to your account</span></div>
                                <input className='border mt-5 py-5 pl-6 w-[82%] outline-none' type='text' placeholder='Phone number' />
                                <input className='border py-5 pl-6 w-[82%] outline-none' type='text' placeholder='Name' />
                                <input className='border py-5 pl-6 w-[82%] outline-none' type='text' placeholder='Email' />
                                <div className='mt-7 font-semibold text-base text-blue-400'>Have a referal code?</div>
                                <button className='mt-5 border py-3 pl-6 w-[82%] text-white bg-orange-500 font-semibold' onClick={navigateMainPage}>CONTINUE</button>
                                <div className='text-xs mt-1'>By clicking on Login, I accept the <span className='font-semibold cursor-pointer'>Terms & Conditions & Privacy Policy</span></div>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div><h1 className='text-gray-700 font-bold lg:mt-16 lg:text-4xl/9 md:mt-12 md:text-3xl/9 xl:mt-10 xs:mt-12 xs:text-3xl'>Hungry?</h1></div>

                <div><h2 className='text-gray-600 lg:pt-4 lg:text-xl font-normal md:text-base md:pt-2 xs:pt-2'>Order food from favourite restaurants near you.</h2></div>

                {/* location search input tag */}
                <div className='flex  lg:w-full lg:pt-12 md:pt-5 md:w-full xs:pt-5 xs:w-[426px]'>
                    <div className='flex font-semibold w-[80%] relative border items-center border-orange-400  xs:w-[100%]'>
                        <input type="text" className='lg:text-lg w-[100%] h-[1%] py-4 lg:pl-3 md:text-base md:pl-2 xs:pl-3 outline-none' placeholder='Enter your delivery location' />
                        <h3 className='text-gray-500 lg:right-3 lg:absolute hover:bg-gray-200 hover:py-2 lg:hover:px-2 lg:text-base md:relative md:text-sm md:hover:px-0 md:right-2 xs:pr-2'>
                            <CurrentLocation onFetchAddress={handleResults} onError={onError}>
                                {({ getCurrentLocation, loading }) => (
                                    <button onClick={getCurrentLocation} disabled={loading}>
                                        <FontAwesomeIcon className='mx-1 ' icon={faCrosshairs} />
                                        Locate Me
                                    </button>
                                )}
                            </CurrentLocation>
                        </h3>
                    </div>
                    <div className='border border-orange-500 w-[20%] h-[1%] py-4 lg:px-5  bg-orange-500 text-white font-bold md:text-base md:px-3'>
                        <button>FIND FOOD</button>
                    </div>
                </div>

                {/* different cities */}
                <div className='lg:my-8 md:my-6 xs:my-6 md:text-base xs:text-sm'>
                    <h3 className='text-gray-400 font-semibold'>POPULAR CITIES IN INDIA</h3>
                    <div className='lg:my-2 gap-2 flex flex-wrap cursor-pointer md:my-1 xs:my-2'>
                        <a href='#ahmedabad' className='text-gray-500 font-semibold'>Ahmedabad</a>
                        <a href='#banglore' className='text-gray-400 font-semibold'>Bangalore</a>
                        <a href='#chennai' className='text-gray-500 font-semibold'>Chennai</a>
                        <a href='#delhi' className='text-gray-400 font-semibold'>Delhi</a>
                        <a href='#gurgaon' className='text-gray-500 font-semibold'>Gurgaon</a>
                        <a href='#hyderabad' className='text-gray-400 font-semibold'>Hyderabad</a>
                        <a href='#kolkata' className='text-gray-500 font-semibold'>Kolkata</a>
                        <a href='#mumbai' className='text-gray-400 font-semibold'>Mumbai</a>
                        <a href='#pune' className='text-gray-500 font-semibold'>Pune</a>
                        <a href='#more' className='text-gray-400 font-semibold'> & more.</a>
                    </div>
                </div>
            </div>

            {/* left side */}
            <div className="w-[45%]">
                <img className='lg:h-[100%] md:h-[100%] sm:h-0 xs:h-0' src={lunch1} alt='lunch1' />
            </div>
        </div>
    )
}

export default Home_page
import ios_app from '../../assests/login_page/iOS_app.webp'
import play_app from '../../assests/login_page/play_app.webp'
import pixel_app from '../../assests/login_page/pixel_app.webp'
import iPhone_app from '../../assests/login_page/iPhone_app.webp'

const Swiggy_app = () => {
    return (
        <div className="w-full flex lg:pl-40 md:pl-20 sm:pl-12 xs:pl-8">
            <div className='w-[40%]'>
                <div className="xl:text-[37px] md:text-[30px] sm:text-[28px] xs:text-[20px] flex-wrap font-bold font-ProximaNova text-neutral-700 md:leading-10 sm:leading-8 xs:leading-7 xl:mt-36 lg:mt-28 md:mt-28 sm:mt-14 xs:mt-12">
                    <div>Restaurants in</div>
                    <div> your pocket</div>
                </div>

                <div className="md:text-lg sm:text-sm xs:text-xs mt-4 text-gray-500 flex-wrap">
                    <div>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
                </div>

                <div className='sm:flex cursor-pointer max-w-[32%] max-h-[20%] xs:hidden space-x-6 lg:mt-12 md:mt-6 sm:mt-3 xs:mt-2'>
                    <img src={play_app}></img>
                    <img src={ios_app}></img>
                </div>
            </div>
            <div className='w-[60%] grid grid-cols-2 '>
                <img className='h-[90%] w-[95%]' src={pixel_app}></img>
                <img className='h-[87%] w-[95%] mt-[18%] sm:-ml-12 xs:-ml-7' src={iPhone_app}></img>
            </div>

        </div>
    )
}

export default Swiggy_app
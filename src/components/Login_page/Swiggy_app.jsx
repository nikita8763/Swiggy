import ios_app from '../../assests/iOS_app.webp'
import play_app from '../../assests/play_app.webp'
import pixel_app from '../../assests/pixel_app.webp'
import iPhone_app from '../../assests/iPhone_app.webp'

const Swiggy_app = () => {
    return (
        <div className="w-full flex pl-40">
            <div className='w-[40%]'>
                <div className="text-[37px] font-bold font-ProximaNova text-neutral-700 leading-10 mt-36">
                    <div>Restaurants in</div>
                    <div> your pocket</div>
                </div>

                <div className="text-lg mt-4 text-gray-500">
                    <div>Order from your favorite restaurants & track</div>
                    <div>on the go, with the all-new Swiggy app.</div>
                </div>

                <div className='flex cursor-pointer max-w-[32%] max-h-[20%] space-x-6 mt-14'>
                    <img src={play_app}></img>
                    <img src={ios_app}></img>
                </div>
            </div>
            <div className='w-[60%] grid grid-cols-2 '>
                <img className='h-[90%] w-[95%]' src={pixel_app}></img>
                <img className='h-[87%] w-[95%] mt-[18%] -ml-12' src={iPhone_app}></img>
            </div>

        </div>
    )
}

export default Swiggy_app
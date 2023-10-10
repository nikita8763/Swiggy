import No_min_order from '../../assests/No_min_order.webp'
import Live_order from '../../assests/Live_order.webp'
import super_fast_delivery from '../../assests/Super_fast_delivery.webp'

const Benifits = () => {
    return (
        <div className="bg-yellow-950 w-full grid-rows-3 md:pb-16 xs:pb-12">

            {/* images */}
            <div className="grid grid-cols-3 xl:ml-64 lg:ml-48 md:ml-32 sm:ml-20 xs:ml-14">
                <div><img className='mt-1 lg:max-w-[52%] lg:max-h-48 xs:max-w-[32%] xs:max-h-40' src={No_min_order} alt="no min order" /></div>
                <div><img className='lg:max-w-[52%] lg:max-h-48 xs:max-w-[32%] xs:max-h-40' src={Live_order} alt='live order' /></div>
                <div><img className='lg:max-w-[52%] lg:max-h-48 xs:max-w-[32%] xs:max-h-40 mt-4 xs:mt-4 ' src={super_fast_delivery} alt='super_fast_delivery' /></div>
            </div>

            {/* headline of images */}
            <div className='grid grid-cols-3 xl:ml-56 mt-5 lg:ml-36 md:ml-20 sm:ml-9 xs:ml-5'>
                <div className='text-gray-200 font-bold lg:text-xl md:text-lg sm:text-base xs:text-sm'>No Minimum Order</div>
                <div className='text-gray-200 font-bold lg:text-xl md:text-lg sm:text-base xs:text-sm'>Live Order Tracking</div>
                <div className='text-gray-200 font-bold lg:text-xl md:text-lg sm:text-base xs:text-sm'>Lightning-Fast Delivery</div>
            </div>

            {/* description of images */}
            <div className='grid grid-cols-3 xl:ml-48 lg:ml-36 md:ml-20 sm:ml-9 xs:ml-5 mt-2'>
                <div className='max-w-[58%] text-yellow-50 font-light md:text-base sm:text-sm xs:text-xs'>Order in for yourself or for the group, with no restrictions on order value</div>
                <div className='max-w-[58%] text-yellow-50 font-light md:text-base sm:text-sm xs:text-xs'>Know where your order is at all times, from the restaurant to your doorstep</div>
                <div className='max-w-[58%] text-yellow-50 font-light md:text-base sm:text-sm xs:text-xs'>Experience Swiggys superfast delivery for food delivered fresh & on time</div>
            </div>

        </div>
    )
}

export default Benifits
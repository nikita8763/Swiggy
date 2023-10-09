import No_min_order from '../../assests/No_min_order.webp'
import Live_order from '../../assests/Live_order.webp'
import super_fast_delivery from '../../assests/Super_fast_delivery.webp'

const Benifits = () => {
    return (
        <div className="bg-yellow-950 w-full grid-rows-3 pb-16">

            {/* images */}
            <div className="grid grid-cols-3 ml-64">
                <div><img className='mt-1 max-w-[52%] max-h-48' src={No_min_order} alt="no min order" /></div>
                <div><img className='max-w-[52%] max-h-48' src={Live_order} alt='live order' /></div>
                <div><img className='max-w-[52%] max-h-48 mt-4 ' src={super_fast_delivery} alt='super_fast_delivery' /></div>
            </div>

            {/* headline of images */}
            <div className='grid grid-cols-3 ml-56 mt-5'>
                <div className='text-gray-200 font-bold text-xl'>No Minimum Order</div>
                <div className='text-gray-200 font-bold text-xl'>Live Order Tracking</div>
                <div className='text-gray-200 font-bold text-xl'>Lightning-Fast Delivery</div>
            </div>

            {/* description of images */}
            <div className='grid grid-cols-3 ml-48 mt-2'>
                <div className='max-w-[58%] text-yellow-50 font-light'>Order in for yourself or for the group, with no restrictions on order value</div>
                <div className='max-w-[58%] text-yellow-50 font-light'>Know where your order is at all times, from the restaurant to your doorstep</div>
                <div className='max-w-[58%] text-yellow-50 font-light '>Experience Swiggys superfast delivery for food delivered fresh & on time</div>
            </div>

        </div>
    )
}

export default Benifits
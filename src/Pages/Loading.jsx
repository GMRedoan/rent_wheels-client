
import logo from '/logo.png'

const Loading = () => {
    return (
         <div className='flex justify-center items-center py-20'>
            <div className='text-4xl md:text-6xl font-semibold flex justify-center items-center text-black'>
                Rent<div className='w-25 md:w-35 animate-spin'><img src={logo} alt="" /></div><span className='text-primary'>Wheels</span>
            </div>
         </div>
    );
};


export default Loading;
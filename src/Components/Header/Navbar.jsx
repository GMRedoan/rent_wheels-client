import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center  sticky top-0 z-10 pt-3 px-6">
            <div className="flex py-3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/'><li>Home</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/shop'><li>Shop</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/blog'><li>Blog</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='/contact'><li>Contact</li></NavLink>
                        </div>
                    </ul>
                </div>
                <Link to='/' className='flex '>
                    {/* <img className='w-[78px]' src='' alt="" /> */}
                    <p className="mt-2 md:mt-0 md:text-3xl font-black">Toy Topia</p>
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-10 ">
                    <div className='flex items-center gap-1 text-xl '>
                        <NavLink to='/'><li>Home</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='addCar'><li>Add Car</li></NavLink>
                    </div>
                    {/* <div className='flex items-center gap-1 text-xl'>
                        <NavLink to=''><li>Blog</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to=''><li>Contact</li></NavLink>
                    </div> */}
                </ul>
            </nav>
            <Link to='/login' className="btn btn-primary font-bold text-white hover:bg-secondary">Login / SignUp</Link>
        </nav>
    );
};

export default Navbar;
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/authContext';
import Swal from 'sweetalert2';
import logo from '/logo.png'
import Loading from '../../Pages/Loading';

const Navbar = () => {
    const { user, logout  } = use(AuthContext)

    const handleLogout = () => {
        logout().then(() => {
            Swal.fire({
                title: "You Logged Out Successfully",
                icon: "success",
                confirmButtonColor: "#67AB4F"
            });
        }).catch((error) => {
            console.log(error)
        });
    }

//       if (loading) {
//         return (
//  <div>
//     <Loading></Loading>
//  </div>
//         );
//     }
    return (
        <nav className="pr-4 md:px-6 flex justify-between items-center pt-3  bg-base-200 sticky top-0 z-10">
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
                            <NavLink to='addCar'><li>Add Car</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='allCars'><li>Browse Cars</li></NavLink>
                        </div>
                        {
                            user &&
                            <div className='flex items-center gap-1 text-xl'>
                                <NavLink to='myListing'><li>My Listing</li></NavLink>
                            </div>
                        }
                        {
                            user &&
                            <div className='flex items-center gap-1 text-xl'>
                                <NavLink to='myBooking'><li>My Booking</li></NavLink>
                            </div>
                        }
                     </ul>
                </div>
                <Link to='/' className='flex justify-center md:items-center'>
                    <img className='w-[42px] md:w-[82px]' src={logo} alt="" />
                    <p className="mt-2 md:mt-0 md:text-3xl font-bold">Rent<span className='md:text-2xl font-normal text-primary'>wheels</span></p>
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
                    <div className='flex items-center gap-1 text-xl'>
                        <NavLink to='allCars'><li>Browse Cars</li></NavLink>
                    </div>
                    {
                        user &&
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='myListing'><li>My Listing</li></NavLink>
                        </div>
                    }
                    {
                        user &&
                        <div className='flex items-center gap-1 text-xl'>
                            <NavLink to='myBooking'><li>My Booking</li></NavLink>
                        </div>
                    }
                </ul>
            </nav>
            {
                user ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="m-1">
                            <img
                                className="w-[42px] h-[42px] rounded-full cursor-pointer ring-2 ring-primary/40 hover:ring-primary transition"
                                src={user.photoURL}
                                alt="profile"
                            />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-xl shadow-lg border border-primary w-56 pb-4">
                            <li className="pointer-events-none!">
                                <p className="font-semibold text-lg text-gray-800">{user.displayName}
                                </p>
                            </li>
                            <li className="pointer-events-none!">
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </li>

                            <div className="divider my-1"></div>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-primary btn-sm text-white w-full rounded-lg shadow hover:bg-secondary">Log Out
                                </button>
                            </li>

                        </ul>
                    </div>
                    :
                    <Link to='/login' className="btn btn-primary font-bold text-white hover:bg-secondary">Login / SignUp</Link>
            }
        </nav>
    );
};

export default Navbar;
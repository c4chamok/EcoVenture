import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='w-full flex justify-center items-center relative z-40'>
            <div className="w-11/12 navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">EcoVenture</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-3 menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to='/my-profile'>My Profile</NavLink></li>
                        <li><NavLink to={'/update'}>Update Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden md:block'>
                        {user ?
                            <span className="flex items-center gap-2 relative">
                                <div className="relative group">
                                    <Link to='/my-profile'>
                                        <img
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            className="size-[41px] rounded-full"
                                            src={user?.photoURL || FaUser}
                                            alt=""
                                        />
                                    </Link>
                                    {
                                        isHovered &&
                                        <div className="absolute mt-1 px-2 py-1 w-fit bg-gray-800 text-white text-sm rounded shadow ">
                                            {user?.displayName}
                                        </div>
                                    }
                                </div>
                                <button onClick={logout} className="btn px-6 bg-indigo-500 text-white hover:bg-indigo-600">Logout</button>
                            </span>
                            :
                            <Link to={'/login'} className='btn px-6 bg-indigo-500 text-white hover:bg-indigo-600'>Login</Link>
                        }
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="right-5 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                user &&
                                <div className='max-[768px]:flex hidden flex-col items-center justify-center pb-2 mb-2 border-b'>
                                    <div>
                                        <img
                                            className="size-[41px] rounded-full"
                                            src={user?.photoURL || FaUser}
                                            alt=""
                                        />
                                    </div>
                                    <div> {user?.displayName}</div>
                                </div>
                            }
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to='/my-profile'>My Profile</NavLink></li>
                            <li><NavLink to={'update'}>Update Profile</NavLink></li>
                            <li className='max-[768px]:block hidden'>
                                {user ?
                                    <button onClick={logout} className="btn px-6">Logout</button>
                                    :
                                    <Link to={'/login'} className='btn px-6'>Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


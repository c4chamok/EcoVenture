import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa6';
import LoadingPage from './LoadingPage';

const Profile = () => {
    const { user } = useContext(AuthContext)
    document.title = "Ecoventure | My Profile"
    return (
        <div className='flex flex-col items-center mt-10 min-h-[250px]'>
            <div className='w-7/12'>
                <h2 className='text-5xl'>Welcome <span className='text-blue-950 font-bold'>{user.displayName}</span></h2>
                <div className='mt-10 flex flex-col gap-7 md:flex-row '>
                    <div className='w-full flex flex-col items-center gap-3 max-[768px]:pb-5 md:pr-12 max-[768px]:border-b md:border-r border-[#d1cfcfd0]'>
                        <img className="size-[100px] rounded-full" src={user?.photoURL || FaUser} />
                        <NavLink className='btn' to='/update'>Update Profile</NavLink>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='w-full flex flex-col gap-4'>

                            <span className='w-full text-2xl md:w-fit py-2'>Email : {user.email} </span>
                            <span className='w-full text-2xl md:w-fit py-2'>Name: {user.displayName} </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LoadingPage from './LoadingPage';



const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    
    document.title = "Ecoventure | Update Profile"

    const navigate = useNavigate()
    const updateData = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const imgUrl = form.image.value;
        updateUserProfile({
            displayName: userName,
            photoURL: imgUrl
        })
            .then(res => {navigate('/my-profile')})
            .catch(err => { })
    }
    return (
        <div className='flex flex-col items-center mt-8 min-h-[300px]'>
            <h2 className='text-4xl font-semibold'>Update Your Profile</h2>
            <div className='w-7/12 flex max-[768px]:flex-col items-center mt-10'>
                <div className='flex flex-col gap-3 md:pr-12 md:border-r border-[#d1cfcfd0]'>
                    <div className='flex max-[768px]:flex-col items-center gap-3'>
                        <img

                            className="size-[80px] rounded-full"
                            src={user?.photoURL || FaUser}
                            alt=""
                        />
                        <p className='p-1 font-bold'>{user.displayName} </p>
                    </div>
                    <NavLink className='btn' to='/my-profile'> My profile</NavLink>
                </div>
                <div className='max-[768px]:w-fit w-full flex justify-center max-[768px]:border-t border-[#d1cfcfd0] max-[768px]:pt-7 max-[768px]:mt-7'>
                    <form onSubmit={updateData} className='flex flex-col gap-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" name='name' placeholder='Name' required />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" name='image' placeholder='Image URL' required />
                        </label>
                        <button type='submit' className='btn hover:bg-gray-800 hover:text-white'> Update Information</button>
                    </form >
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
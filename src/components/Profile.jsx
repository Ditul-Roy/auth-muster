import React, { useContext } from 'react';
import { AuthContext } from '../assets/Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-center mt-20'>
            <div>
                <h3 className='text-2xl font-bold uppercase text-center'>{user.displayName}</h3>
                <p className='text-center'>{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;
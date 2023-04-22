import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../assets/Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const logOutUser = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth muster</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                <div className='ms-96'>
                    {user ? <>
                        <span className='me-4 rounded-full bg-blue-700 p-4'>{user.displayName}</span>
                        <button onClick={logOutUser} className='btn btn-xs rounded-full'>log Out</button>
                    </> :
                        <Link to="/login"></Link>
                    }
                </div>
            </div>
        </div>

    );
};

export default Header;
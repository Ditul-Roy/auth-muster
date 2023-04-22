import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/Provider/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');

    const {createUser, updateName}= useContext(AuthContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res=>{
            const regUser = res.user;
            console.log(regUser);
            updateUserName(res.user, name)
            form.reset();
        })
        .catch(error=> {
            console.log(error);
        })
      
    }

    const updateUserName = (user, name) =>{
        updateName(user, name)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-lime-800'>{error}</p>
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p><small>already have an account ! please <Link className='underline' to="/login">Log in</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
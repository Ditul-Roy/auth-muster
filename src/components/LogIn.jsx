import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/Provider/AuthProvider';
import { useRef } from 'react';

const LogIn = () => {

    const {logInUser, signInwithGoogle, forgoten} = useContext(AuthContext);
    const emailRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then(res=>{
            const user = res.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const hangleGoogle = () =>{
        signInwithGoogle()
        .then(res=> {
            const user = res.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    const forget = () =>{
        const email = emailRef.current.value;
        forgoten(email)
        .then(res=>{
            alert('varify your email')
        })
        .catch(error=>console.log(error))
    } 
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" ref={emailRef} name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a onClick={forget} className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={hangleGoogle} className='btn btn-xs'>google</button>
                        </div>
                        <p><small>new to auth muster ! please <Link className='underline' to="/register">Register</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
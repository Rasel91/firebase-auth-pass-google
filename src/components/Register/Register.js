
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Context/UserContext';

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)
    console.log('createUser', createUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        //  console.log( name, email, password)

        createUser( email, password)
            .then(result => {
                const user = result.user;
                console.log('register', user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
              
            })


    }

    const handleGoogleSignIn = ()=>{
        googleLogin()
        .then (result =>{
            const user = result.user;
            console.log('googleLogin', user);
        })
        .catch( error=> console.error(error))
    }

    return (
        <div>

            <div className="hero ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full bg-cyan-800 shadow-2xl ">
                        <form onSubmit={handleSubmit} className="card-body  ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover ">
                                        Already, have an account?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary ">Register</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-4/5 text-center ml-9 ">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
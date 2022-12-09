import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
    const {signIn}= useContext(AuthContext);

    const handleSubmit = (event)=>{
        event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

         console.log(email, password)

       signIn(email, password).then(result=>{
        const user = result.user;
        console.log('signIn', user);
        form.reset();
       })
       .catch(error=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        console.error(error);
    
       })

    }

    return (
        <div>
          
            <div className="hero ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl  bg-cyan-800">
                        <form onSubmit={handleSubmit}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">
                                        Forget Password
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
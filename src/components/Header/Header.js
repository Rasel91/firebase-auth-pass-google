import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);

    // console.log('context', user);

     const handleSignOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch(error=>console.error(error))
     }
    return (

        <div className="navbar bg-cyan-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                        <Link to='/login' className="btn btn-ghost normal-case text-xl">Log In </Link>
                        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                        <button onClick={handleSignOut} className="btn btn-sm">Logout</button>
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to='/login' className="btn btn-ghost normal-case text-xl">Log In </Link>
                    <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                    {
                        user?.email && <span>Welcome, {user.email}</span>
                    }
                    <button onClick={handleSignOut} className="btn btn-sm">Logout</button>
                </div>
            </div>
        </div>



    );
};

export default Header;
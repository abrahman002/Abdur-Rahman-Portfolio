import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

const Navber = () => {

    const menuBar = <>
        <li><Link>Home</Link></li>
        <li><Link to=''>Contact</Link></li>
        <li><Link to=''>Git</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100 text-center lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuBar}
                        </ul>
                    </div>
                    <a className="text-sm lg:text-xl font-normal uppercase"><span className='font-bold'>Abdur</span> Rahman</a>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='mr-5' title='Twitter' ><AiOutlineTwitter /></Link>
                    <Link className='mr-5' title='Github' to='https://github.com/abrahman002'><AiOutlineGithub /></Link>
                    <Link className='mr-5' title='Linkedin' to='https://www.linkedin.com/in/abrahman002/'><AiFillLinkedin /></Link>
                    <Link title='Mail' ><AiOutlineMail /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
import React from 'react';
import { FaLink, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='lg:p-10 p-10'>

            <div className='text-center lg:p-5 p-5'>
                <h1 className='text-sm text-gray-400 uppercase'>Projects</h1>
                <p className='text-3xl font-bold'>Recent Projects</p>
            </div>
            <div className='grid grid-rows-3 gap-5'>
                <div className='bg-base-200 lg:p-10 p-5 rounded-lg'>
                    <div>
                        <h1 className='lg:text-3xl text-sm font-semibold text-cyan-600'>Food Village</h1>
                        <p className='lg:text-base text-sm mb-5 text-gray-400'>The site has food and chef informantion.</p>
                        <div className='flex gap-16'>
                            <Link className='flex items-center gap-3 ' to='https://chef-recipe-hunter-24b22.web.app/'>
                                <p><FaLink /></p>
                                <p>Visit</p>
                            </Link>
                            <Link className='flex items-center gap-3 ' to='https://github.com/abrahman002/Chef-Recipe-Hunter'>
                                <p><FaGithub /></p>
                                <p>GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-base-200 lg:p-10  p-5  rounded-lg'>
                    <div>
                        <h1 className='lg:text-3xl text-sm font-semibold text-cyan-600'>Baby Toys</h1>
                        <p className='lg:text-base text-sm mb-5 text-gray-400'>The site has Baby and Toys related .</p>
                        <div className='flex gap-16'>
                            <Link className='flex items-center gap-3 ' to='https://baby-toys-83bd4.web.app/'>
                                <p><FaLink /></p>
                                <p>Visit</p>
                            </Link>
                            <Link className='flex items-center gap-3 ' to='https://github.com/abrahman002/Baby-Toys'>
                                <p><FaGithub /></p>
                                <p>GitHub</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-base-200 lg:p-10 text-sm p-5 rounded-lg'>
                    <div>
                        <h1 className='lg:text-3xl text-sm  font-semibold text-cyan-600'>School Summer Camp</h1>
                        <p className='lg:text-base text-sm mb-5 text-gray-400'>The site has school summer camp related.</p>
                        <div className='flex gap-16'>
                            <Link className='flex items-center gap-3 ' to='https://auth-firebase-context-ta-55b98.web.app/'>
                                <p><FaLink /></p>
                                <p>Visit</p>
                            </Link>
                            <Link className='flex items-center gap-3 ' to='https://github.com/abrahman002/School-Summer-Camp-Client'>
                                <p><FaGithub /></p>
                                <p>GitHub</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;
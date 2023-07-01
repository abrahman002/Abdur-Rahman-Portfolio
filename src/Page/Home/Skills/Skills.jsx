import React from 'react';

const Skills = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-gray-400 uppercase text-lg'>skills</h1>
                <p className='text-3xl font-bold'>My  Skills</p>
                <div className='grid grid-cols-5 lg:p-24 items-center gap-5 p-14'>
                    <div>
                        <img className='w-36' src="https://i.ibb.co/mhPbJTw/html-5.gif" alt="" />
                    </div>
                    <div>
                        <img className='w-24 rounded-lg' src="https://i.ibb.co/NSJ4kQ3/css.gif" alt="" />
                    </div>
                    <div>
                        <img className='w-24  rounded-lg' src="https://i.ibb.co/yWrzhYY/icons8-javascript.gif" alt="" />
                    </div>
                    <div>
                        <img className='w-24 rounded-lg' src="https://i.ibb.co/K6BkyhN/physics-1.gif" alt="" />
                    </div>
                    <div>
                        <img className='w-24' title='Next.js' src="https://i.ibb.co/QJX91sR/nextjs-icon-svgrepo-com.png" alt="" />
                    </div>
                    <div>
                        <img className='w-28' src="https://i.ibb.co/H7pDbxt/icons8-nodejs-48.png" alt="" />
                    </div>
                    <div>
                        <img className='w-24' title='MongoDB' src="https://i.ibb.co/YjMZrdM/icons8-mongodb-48.png" alt="" />
                    </div>
                    <div>
                        <img className='w-24' title='Express.js' src="https://i.ibb.co/vc6SXXP/icons8-express-js-64.png" alt="" />
                    </div>
                    <div>
                        <img className='w-24' title='Firebase' src="https://i.ibb.co/0Jj11Cg/icons8-google-firebase-console-48.png" alt="" />
                    </div>
                    <div>
                        <img className='w-24 rounded-lg' src="https://i.ibb.co/Qrt8j5j/icons8-github.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import { useGlitch } from 'react-powerglitch'

const Banner = () => {
    const glitch = useGlitch();
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:p-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/MPw0PJr/320062981-549114903447222-4253602463704731512-n.jpg" className=" max-w-sm  rounded-full  opacity-50 w-60 h-60 lg:w-96 lg:h-96 " />
                    <div>
                        <h1 className="text-base font-bold "><span className='bg-green-500 p-1 px-2 rounded-lg'><span ref={glitch.ref}>Front-End Web Developer</span></span></h1>
                        <p className="py-4 uppercase font-bold text-3xl">Md Abdur Rahman</p>
                        <p className="mb-14 text-gray-400">Front-End Web Developer with knowledge of ReactJs, NextJs, Typescript, ExpressJs, Node, MongoDB. Also has experience with developing backend APIs using Node web frameworks.</p>
                        <div className='flex items-center'>

                            <button className="border-b-orange-300 lg:mr-10 mr-5 uppercase text-base flex items-center ">  <img src="https://i.ibb.co/rpQ7kNw/icons8-installing-updates.gif" className='w-6 rounded mr-2' alt="" />Download Resume</button>
                            <button className=" uppercase text-base  border-b-red-200">Let's Chat</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
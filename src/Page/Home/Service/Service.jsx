import React from 'react';

const Service = () => {
    return (
        
            <div className='text-center lg:p-20 py-5 '>
                <h1 className='text-xl text-gray-400 uppercase'>Services</h1>
                <h3 className='text-3xl font-bold'>What  I Do?</h3>
                <div className='lg:grid grid-cols-3 gap-7'>
                    <div className='lg:py-10 py-5'>
                        <div className="card lg:w-96 bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/rwxs2NF/icons8-developer-1.gif" className='w-20 rounded-md ml-10 mt-5' alt="" />
                            <div className="card-body">
                                <h1 className='text-xl font-bold'>Frontend Developments</h1>
                                <p className='text-md text-gray-400'>Develop modern looking UI using HTML, CSS, JavaScript and ReactJs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:py-10 py-5'>
                        <div className="card lg:w-96 bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/YjhcvBM/icons8-programming.gif" className='w-20 rounded-md ml-10 mt-5' alt="" />
                            <div className="card-body">
                                <h1 className='text-xl font-bold'>Backend Developments</h1>
                                <p className='text-md text-gray-400'>Backend REST API development using ExpressJs (JavaScript)</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:py-10 py-5'>
                        <div className="card lg:w-96 bg-base-100 shadow-xl">
                            <img src="https://i.ibb.co/wMLg97X/icons8-design.gif" className='w-20 rounded-md ml-10 mt-5' alt="" />
                            <div className="card-body">
                                <h1 className='text-xl font-bold'>Responsive Design</h1>
                                <p className='text-md text-gray-400'>Wesbites I make will look good in Mobile, Tablet and Desktop devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default Service;
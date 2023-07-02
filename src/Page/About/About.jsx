import React from 'react';

const About = () => {
    return (
        <div className=' lg:w-9/12 mx-auto lg:p-10 p-5'>
            <div className='lg:p-14'>
                <div className='flex gap-5 items-center mb-5'>
                    <h1 className='text-3xl font-semibold'>Welcome</h1>
                    <img src="https://i.ibb.co/XbMHMwz/icons8-love-1.gif" className='rounded-lg w-10' alt="" />
                </div>
                <h3 className='lg:text-md text-xs'> I'm `Abdur Rahman`. Front-End web developer, Student of Computer Software Engineering.</h3>
                <div className='flex gap-5 items-center mt-14'>
                    <h4 className='text-2xl font-semibold '>Story</h4>
                    <img src="https://i.ibb.co/hKq7WhV/icons8-literature.gif" className='rounded-lg w-8' alt="" />
                </div>
                <p className='text-sm text-gray-300 mt-10'>I wanted to be what I saw when I was a child. I got into school first among my friends so I was a class senior to them 

                    Studied class 1-5 in government school.  Then studied till 8 in a private school. <br /><br />

                    Then there was an entrance exam for a government technical school, luckily I passed.  There my technology was farm machinery then I thought I will become an agriculturist but after giving SSC from there I chose government institute to do diploma and here again I continued in computer science.   <br /><br />

                    Then I thought I should become a computer engineer.  I have always wanted to get a computer.  I wanted to work in big companies.Then the diploma ends.<br />
                    <br />
                    Then I started learning HTML, CSS. And I made my first web page. That was the beginning and now I' a junior font-end web developer .</p>
            </div>
        </div>
    );
};

export default About;
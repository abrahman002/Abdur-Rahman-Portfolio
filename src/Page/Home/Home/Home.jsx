import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;
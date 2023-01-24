import React from 'react';
import AppStructure from '../../components/layouts/AppStruct';

const About = () => {
  return (
    <AppStructure>
        <div className=' flex flex-col md:flex-row h-[70vh] gap-[4rem] p-[2rem] md:p-[10rem] bg-red-300'>
        <p>about us</p>
      </div>
    </AppStructure>
  )
}

export default About
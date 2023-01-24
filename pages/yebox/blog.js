import React from 'react';
import AppStructure from '../../components/layouts/AppStruct';

const Blog = () => {
  return (
    <AppStructure>
        <div className=' flex flex-col md:flex-row h-[70vh] gap-[4rem] p-[2rem] md:p-[10rem] bg-green-300'>
            <p>blog page</p>
        </div>
    </AppStructure>
  )
}

export default Blog
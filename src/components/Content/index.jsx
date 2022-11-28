import React from 'react';
import Development from '../Development';
import Education from '../Education'
import Experience from '../Experience';

const content = () => {
  return (
    <div className='content'>
      <div className="content_inside">
     <Development />
    
     <Experience />
     
     <Education />

     </div>
    </div>
  )
}

export default content
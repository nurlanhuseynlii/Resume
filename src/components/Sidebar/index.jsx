import React from 'react'
import Profile from '../Profile/index';
import Contact from '../Contact/index';
import Language from '../Skill/Language/index';
import Hobby from '../Hobby';
const Sidebar = () => {
  return (      
      <aside  className='sidebar'>

        <div className="sidebar__frames">
            <div className="frame"></div>
            <div className="frame"></div>
            <div className="frame"></div>
            <div className="frame"></div>
        </div>

        <div className="sidebar__content">
          <Profile />
           
           
           
            <div className='content-inside'>
          <Contact />
          <Language />
         
          <Hobby />

          </div>
        </div>
        
        
        </aside>  
  )
}

export default Sidebar
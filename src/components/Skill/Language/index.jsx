import React from 'react'

const Language = () => {

    const languages = [
        {
            title: 'Azerbaijani', 
            level: 'Native'
        },

        {
            title: 'Turkish', 
            level: 'Almost Native'
        },
        

        {
            title: 'English',
             level: 'Pre-intermediate'
        },

        {
            title: 'Russian',
             level: 'Beginner'
        },

        

        


        
        

        
    ];


  return (
    <div className='skill_block'>
        <h3 className='language__title'>Language Skills</h3>
        <ul className='lang-skills'>
           {languages.map((langInfo,index)=>(
                <li key={index}>
            
                <span className='lang-title'>{langInfo.title}</span>
                <span className='lang-level'>{langInfo.level}</span>
   
                   </li>
            ))}
        </ul>

    </div>
  )
}

export default Language
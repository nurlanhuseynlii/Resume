import React from 'react'

const Development = () => {

  const skills = [

 
        'Python',
        'JavaScript',
        'React',
        'SASS/SCSS',
        'HTML5',
        'CSS3',
        'GIT',
        'Bootsrap',
        'Figma',

    


    
    ];

    

   
        
  return (
    <div className='development'>
        <h3 className='development__title'>Development Skills</h3>
        <ul className='dev-skills'>
            {skills.map((developmentInfo,index)=>(

            
            <li key={index}>
                <div className='title'>{developmentInfo}</div>
            </li>
           
           
            
              
            ))}
        </ul>
    </div>
  )
}

export default Development
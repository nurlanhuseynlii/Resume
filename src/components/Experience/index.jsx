import React from 'react'

const Experience = () => {


    const experience = [
       
        {
            date:"Oct 2022 - Present",
            title:"Front-End Developer (internship) ",
            subtitle:"Azerbaijan Artificial Intelligence Lab",
        },
      
      
        
        


       
    ]





  return (
    <div className='experience'>
		<h3 className="experience_info">Experience</h3>

        <ul className='experience-data'>
            {experience.map((experienceInfo,index) =>(

            
            <li key={index}>
                <div className='date'>{experienceInfo.date}</div>
                <div className='title'>{experienceInfo.title}</div>
                <div className='subtitle'>{experienceInfo.subtitle}</div>
                <div className='content'>{experienceInfo.content}</div>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Experience
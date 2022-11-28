import React from 'react'

const Education = () => {


    const education = [
       
        {
            date:"2022",
            title:"Front-End Developing",
            subtitle:"Matrix Training Center",
        },
      
      
        {
            date:"2020 - Current",
            title:"Journalism",
            subtitle:"Baku Slavic University",
            content: "Bachelor's degree",
        },

        


       
    ]





  return (
    <div className='education'>
		<h3 className="education_info">Education</h3>

        <ul className='education-data'>
            {education.map((educationInfo,index) =>(

            
            <li key={index}>
                <div className='date'>{educationInfo.date}</div>
                <div className='title'>{educationInfo.title}</div>
                <div className='subtitle'>{educationInfo.subtitle}</div>
                <div className='content'>{educationInfo.content}</div>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Education
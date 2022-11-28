import React from 'react'

const Hobby = () => {
    const hobbies = [
    
        "Cycling",
        "Swimming",
        "Travelling",
          

    ];




  return (
    <div className='hobbies'>
        <h3 className='hobbies_title'>Hobbies</h3>
        <ul className='hobbies__list'>
            {hobbies.map((hobbyInfo,index)=>(
                <li key={index}>
                    <span>{hobbyInfo}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Hobby
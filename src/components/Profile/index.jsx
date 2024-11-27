import React from 'react'
import profile_photo  from '../../assets/images/main.jpeg'
const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile__photo">
            <img src={profile_photo} alt="Nurlan" />
        </div>
        <div className="profile__name">Nurlan Huseynli</div>
        <div className="profile__position">Artificial Intelligence</div>
    </div>
  )
}

export default Profile
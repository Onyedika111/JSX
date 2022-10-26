import React from 'react';
import './photo.css'


function ProfilePhoto() {
  const heading = {
    borderRadius: '3000px'
}
  return (
      <div>
      <img src='./pics.jpg' alt='me' style={heading } />
    </div>
  )
}

export default ProfilePhoto
import React from 'react'

export type ProfileProps = {
  name : string , 
  email : string , 
  age : number
}

const Profile = ({name , email , age} : ProfileProps) => {
  return (
    <div>
      <span>name : {name}</span>
      <span>email : {email}</span>
      <span>age : {age}</span>
    </div>
  )
}

export default Profile
import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
    const user1 = useSelector((state)=>state.user.value)
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Name: {user1.name} </p>
        <p>Age: {user1.age} </p>
        <p>Email: { user1.email} </p>
    </div>
  )
}

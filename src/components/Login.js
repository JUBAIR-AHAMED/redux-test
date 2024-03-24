import React from 'react'
import {useDispatch} from 'react-redux'
import { login } from "../features/user"

export const Login = () => {
  const dispatch=useDispatch()
    return (
    <button onClick={()=>{
        dispatch(login({name:"John Doe", age:25, email:"mail@g.com"}))
    }}>
        Login
    </button>
  )
}

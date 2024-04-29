// pages/Home/Home.jsx
import React,{useState} from "react";
import {connect} from 'react-redux'
import { signup } from "../../action";

const Signup = (isLoading,isSignedup,msg,status,signup) =>{
    const [formData, setFormData] = useState({
      first_name:'',
      last_name:'',
      email: '',
      password:'',
    })
    const{first_name, last_name,email,password} = formData
    const onchange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e =>{
      e.preventDefault()
      signup(first_name, last_name, email, password)
    }
    return(
      <div>
      <h1>Welcome to Signup Page</h1>
      <h2>Create Your Account</h2>
      <form onSubmit={e=>onSubmit(e)}>
        <div>
        <input type="text" placeholder="enter your first name" name="first_name" value={first_name}
        onchange={e=>onchange(e)}
        required/>
        </div>
        <div>
        <input type="text" placeholder="enter your last name" name="last_name" value={last_name}
        onchange={e=>onchange(e)}
        required/>
        </div>

        <div>
        <input type="email" placeholder="enter your email" name="email" value={email}
        onchange={e=>onchange(e)}
        required/>
        </div>

        <div>
        <input type="password" placeholder="enter password" name="password" value={password}
        onchange={e=>onchange(e)}
        required/>
        </div>
        <button>Signup</button>
      </form>
    </div>
    )
    
}
const mapStateToProps = state =>{
  return {
    isLoading :state.signupreducer.isLoading,
    isSignedup:state.signupReducer.isSignedup,
    msg:state.errorReducer.msg,
    status:statee.errorReducer.status
  }
}
const mapDispatchToProps ={
  signup:signup
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

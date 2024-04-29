import {signupTypes} from '../../types/authentication'
import {GET_ERROR} from '../../types/error'
import axios from 'axios'

export const signup = (first_name, last_name, email, password) => async dispatch =>{
    dispatch({
        type:signupTypes.SIGNUP_REQUEST
    })
    const configuration ={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({first_name, last_name, email, password})
try{
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`,data, configuration)
    dispatch({
        type: signupTypes.SIGNUP_SUCCESS
    })
}
catch(err){
    const error = {msg:err.response.data, status:err.repose.status}
    dispatch({
        type:signupTypes.SIGNUP_FAIL
    })
    dispatch({
        type:GET_ERRORS,
        payload:error
})
}
}

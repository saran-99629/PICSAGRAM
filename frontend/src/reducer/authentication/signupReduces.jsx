import { signupTypes } from "../../types/authentication/signupTypes";
const initialState={
    isLoading : false,
    isSignedup : false
}
export const signupReducer =(state = initialState, action)=>{
    const {type} = action
    switch(type){
        case signupTypes.SIGNUP_REQUEST:
            return{
                isLoading:true
            }
        case signupTypes.SIGNUP_SUCCESS:
            return{
                isLoading:false,
                isSignedup:true,
            }
        case signupTypes.SIGNUP_FAIL:
            return{
                isLoading:false,
                isSignedup:false
            }
        default:
            return {state}
    }
}
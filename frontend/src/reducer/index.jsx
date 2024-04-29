import {combinReducers} from 'redux';
import { signupReducer } from './authentication';
import { errorReducer } from './errorReducer';

const rootReducer = combinReducers({
    signupReducer,
    errorReducer
})

export default rootReducer;
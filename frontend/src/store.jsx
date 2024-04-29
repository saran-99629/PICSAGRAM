import {createstore, applymiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';

const middleware = [thunk]
const store = createstore(
    rootReducer,
    composWithDevTools(applymiddleware(...middleware))
)
export default store;
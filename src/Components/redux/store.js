import {createStore} from 'redux'
import contentReducer from './reducers/contentReducer'
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(contentReducer , composeWithDevTools())

export default store ;
import { combineReducers } from 'redux';
import { RECEIVE_MEME } from '../actions'

const memes = (state=[], action) => {
    switch (action.type) {
        case RECEIVE_MEME:
            return action.payload
        default:
            return state;
    }
}
const rootReducer = combineReducers({ memes })

export default rootReducer
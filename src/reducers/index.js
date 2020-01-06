import { combineReducers } from 'redux';
import { RECEIVE_MEME, LOADING } from '../actions'

const memes = (state={loading:false,memes:[]}, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case RECEIVE_MEME:
            return {
                ...state,
                memes:action.payload,
                loading:false
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({ memes })

export default rootReducer
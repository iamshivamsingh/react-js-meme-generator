import { combineReducers } from 'redux';
import { RECEIVE_MEME, LOADING, NEW_MEME } from '../Actions'

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

const myMeme = (state=[], action) => {
    switch(action.type){
        case NEW_MEME:
            state = [...state, action]
            return state
        default:
            return state
    }
}

const rootReducer = combineReducers({ memes, myMeme })

export default rootReducer
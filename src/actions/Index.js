export const RECEIVE_MEME = 'RECEIVE_MEME';
export const LOADING = 'LOADING';

export const fetchMemes = () => (dispatch) => {
    dispatch({type:LOADING})
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: RECEIVE_MEME,
                payload: data.data.memes
            })
        )
}


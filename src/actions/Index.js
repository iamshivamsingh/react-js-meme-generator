export const RECEIVE_MEME = 'RECEIVE_MEME';

export const fetchMemes = () => (dispatch) => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: RECEIVE_MEME,
                payload: data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}


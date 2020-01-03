export const RECEIVE_MEME = 'RECEIVE_MEME';

export const receiveMeme = () => (dispatch) => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => {
            dispatch({
                type: RECEIVE_MEME,
                payload: res.json()
            })
        })
        .catch(err => {
            console.log(err)
        })
}
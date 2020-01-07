export const RECEIVE_MEME = 'RECEIVE_MEME';
export const NEW_MEME = 'NEW_MEME';
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

export const newMeme = (meme) => {
    return {
        type: NEW_MEME,
        meme
    }
}

const postMemeJson = (params) =>{
    params["username"] =  'shivam99';
    params["password"] = 'shivam99';
    
    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    return fetch('https://api.imgflip.com/caption_image', {
    method: "POST",
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());

}
export const createMeme = (new_meme_object) => (dispatch) => {
    return postMemeJson(new_meme_object)
    .then(new_meme => dispatch(newMeme(new_meme)))
}
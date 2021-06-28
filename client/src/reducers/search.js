import { searches } from '../constants/Search';

const initialState = {
    playlist : "",
    retrieving : false,
    status : null
};

export const search = (state = initialState, action) => {
    switch (action.type) {
        case searches.GET_PLAYLIST_REQUEST:
            return {
                ...state,
                playlist : "",
                retrieving : true,
                status : 'Getting playlist...'
            }

        case searches.GET_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlist : action.playlist,
                retrieving : false,
                status : 'Get playlist success!'
            } 

        case searches.GET_PLAYLIST_FAILURE:
            return {
                ...state,
                playlist : "",
                retrieving : false,
                status : 'Get playlist failed!'
            }

        default:
            return state
    }
}
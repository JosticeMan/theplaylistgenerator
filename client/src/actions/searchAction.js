import axios from 'axios';
import { searches } from '../constants/Search';
import { SearchBarConstants } from "../common/constants";

const ENDPOINT_BASE = 'http://localhost:8080';

export const getPlaylist = (keyword, playlistOption) => {
    return async dispatch => {
        dispatch({
            type: searches.GET_PLAYLIST_REQUEST
        });

        if(playlistOption !== 0) {
            dispatch({
                type : searches.GET_PLAYLIST_SUCCESS,
                playlist : SearchBarConstants.SELECT_URLS[playlistOption]
            });
            return;
        }

        await axios({
            method : 'POST',
            url : ENDPOINT_BASE + '/youtube',
            headers: {
                'cache-control': 'no-cache, no-store, must-revalidate',
                'expires': '0',
                'pragma': 'no-cache'
            },
            data : {
                searchterm : keyword
            }
        }).then( async(response)  => {
            if (response.status == 200) {
                let playlist = response.data;
                dispatch({
                    type : searches.GET_PLAYLIST_SUCCESS,
                    playlist : playlist
                });
            } else {
                dispatch({
                    type : searches.GET_PLAYLIST_FAILURE
                })
            }
        }).catch( async(error) => {
            dispatch({
                type : searches.GET_PLAYLIST_FAILURE
            })
        });
    }
}
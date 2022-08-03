import axios from 'axios';
import { HELP_SEARCH_RESULT, ERROR, RESET } from "../../constants/action-types";

export const fetchHelp = (params) => async (dispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    dispatch({
        type: RESET       
    });

    await axios
        .get(`${process.env.REACT_APP_HOST}search?query=${params.query}`, config)
        .then((response) => {        
            dispatch({
                type: HELP_SEARCH_RESULT,
                payload: response.data?.results
            });
        }).catch((error) => {
            dispatch({ type: ERROR, payload: error });
        });
}

export const fetchHelpFromCache = (results) => async (dispatch) => {
    dispatch({
        type: HELP_SEARCH_RESULT,
        payload:results
    });

}
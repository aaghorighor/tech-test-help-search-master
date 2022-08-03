import { HELP_SEARCH_RESULT, ERROR, RESET } from "../../constants/action-types"

const INIT_STATE = {
    helpResults: [],  
    success: false,
    error: false
}

const helpReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case HELP_SEARCH_RESULT: {
            return {
                ...state,
                helpResults: action.payload,
                totalPages: action.payload?.length,
                success: true
            };
        }
        case RESET: {
            return {
                ...state,
                success: false,
                error: false
            };
        }
        case ERROR: {
            return {
                ...state,
                error: true
            };
        }

        default:
            return state;
    }
}

export default helpReducer
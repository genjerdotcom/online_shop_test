import { 
    LOGIN_REQUEST,
    RESET_LOGIN_PROCESS
} from '../types';

const initialState = {
    error: false,
    inSession: false,
    dataLogin: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                error: action.error,
                inSession: action.inSession,
                dataLogin: action.payload.data
            }
        case RESET_LOGIN_PROCESS:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

export default authReducer
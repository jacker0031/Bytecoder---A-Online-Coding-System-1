const initialState = {
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    isLoggedIn: false,
    error: { login: null, register: null },
    message: null,
    token: null,
    pending: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                pending: true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.token,
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                email: action.email,
                isLoggedIn: true,
                message: action.msg,
                error: null,
                pending: false,
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: {
                    login: action.error,
                    register: state?.error?.register,
                },
                pending: false,
            }
        case 'LOGOUT':
            return {
                ...state,
                username: null,
                firstname: action.firstname,
                lastname: action.lastname,
                email: action.email,
                token: null,
                isLoggedIn: false,
                message: null,
                error: null,
                pending: false,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                pending: true,
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                token: action.token,
                username: action.username,
                isLoggedIn: true,
                message: action.msg,
                error: null,
                pending: false,
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                error: {
                    login: state?.error?.login,
                    register: action.error,
                },
                pending: false,
            }
        case 'CLEAR_AUTH_ERROR':
            return {
                ...state,
                error: null,
            }
        default:
            return state
    }
}

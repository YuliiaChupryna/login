const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_IS_EMAIL_ERROR='SET_IS_EMAIL_ERROR';
const SET_IS_PASSWORD_ERROR='SET_IS_PASSWORD_ERROR';

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    password,
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    email
});

export const setIsEmailError = (isError) => ({
    type: SET_IS_EMAIL_ERROR,
    isError,
});

export const setIsPasswordError = (isError) => ({
    type: SET_IS_PASSWORD_ERROR,
    isError,
});

const initialState = {
    email: '',
    password: '',
    isEmailError: null,
    isPasswordError: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case SET_IS_EMAIL_ERROR:
            return {
                ...state,
                isEmailError: action.isError,
            };
        case SET_IS_PASSWORD_ERROR:
            return {
                ...state,
                isPasswordError: action.isError,
            };
        default:
            return state;
    }
};

export default loginReducer;

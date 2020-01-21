import { createStore } from 'redux';

const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_ARE_INPUTS_RESETED='SET_ARE_INPUTS_RESETED';
const SET_IS_EMAIL_ERROR='SET_IS_EMAIL_ERROR';
const SET_IS_PASSWORD_ERROR='SET_IS_PASSWORD_ERROR';
const SET_IS_RESET_CLICKED='SET_IS_RESET_CLICKED';
const SET_RESETTING_EMAIL = 'SET_RESETTING_EMAIL';
const SET_IS_RESETTING_EMAIL_ERROR = 'SET_IS_RESETTING_EMAIL_ERROR';

export const getEmail = state => state.email;
export const getPassword = state => state.password;
export const getAreInputsReseted = state => state.areInputsReseted;
export const getIsEmailError = state => state.isEmailError;
export const getIsPasswordError = state => state.isPasswordError;
export const getIsResetClicked = state => state.isResetClicked;
export const getResettingEmail = state => state.resettingEmail;
export const getIsResettingEmailError = state => state.isResettingEmailError;

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    password,
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    email
});

export const setAreInputsReseted = (areReseted) => ({
    type: SET_ARE_INPUTS_RESETED,
    areReseted,
});

export const setIsEmailError = (isError) => ({
    type: SET_IS_EMAIL_ERROR,
    isError,
});

export const setIsPasswordError = (isError) => ({
    type: SET_IS_PASSWORD_ERROR,
    isError,
});

export const setIsResetClicked = (isClicked) => ({
    type: SET_IS_RESET_CLICKED,
    isClicked,
});

export const setResettingEmail = (email) => ({
    type: SET_RESETTING_EMAIL,
    email,
});

export const setIsResettingEmailError = (isError) => ({
    type: SET_IS_RESETTING_EMAIL_ERROR,
    isError,
});

const initialState = {
    email: '',
    password: '',
    areInputsReseted: true,
    isEmailError: null,
    isPasswordError: null,
    isResetClicked: false,
    resettingEmail: '',
    isResettingEmailError: null,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case SET_ARE_INPUTS_RESETED:
            return {
                ...state,
                areInputsReseted: action.areReseted,
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
        case SET_IS_RESET_CLICKED:
            return {
                ...state,
                isResetClicked: action.isClicked,
            };
        case SET_RESETTING_EMAIL:
            return {
                ...state,
                resettingEmail: action.email,
            };
        case SET_IS_RESETTING_EMAIL_ERROR:
            return {
                ...state,
                isResettingEmailError: action.isError,
            };
        default:
            return state;

    }
};

export const store = createStore(rootReducer, initialState);


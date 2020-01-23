const SET_IS_RESET_CLICKED='SET_IS_RESET_CLICKED';
const SET_RESETTING_EMAIL = 'SET_RESETTING_EMAIL';
const SET_IS_RESETTING_EMAIL_ERROR = 'SET_IS_RESETTING_EMAIL_ERROR';

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
    isResetClicked: false,
    resettingEmail: '',
    isResettingEmailError: null,
};

const resetReducer = (state = initialState, action) => {
    switch(action.type) {
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

export default resetReducer;

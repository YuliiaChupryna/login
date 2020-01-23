import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from "./loginReducer";
import resetReducer from "./resetReducer";

export const getEmail = state => state.loginData.email;
export const getPassword = state => state.loginData.password;
export const getIsEmailError = state => state.loginData.isEmailError;
export const getIsPasswordError = state => state.loginData.isPasswordError;
export const getIsResetClicked = state => state.resetData.isResetClicked;
export const getResettingEmail = state => state.resetData.resettingEmail;
export const getIsResettingEmailError = state => state.resetData.isResettingEmailError;

const rootReducer = combineReducers({
    loginData: loginReducer,
    resetData: resetReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


import React, {useState} from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { debounce } from 'debounce';
import {
    getEmail,
    getPassword,
    getIsEmailError,
    getIsPasswordError,
    setEmail,
    setPassword,
    setIsEmailError,
    setIsPasswordError,
    setIsResetClicked
} from "./redux/store";

const LoginForm = ({
  setEmail,
  setPassword,
  isEmailError,
  isPasswordError,
  setIsEmailError,
  setIsPasswordError,
  setIsResetClicked,
}) => {
    const [inputingEmail, setInputingEmail] = useState('');
    const [isInputingEmailValid, setIsInputingEmailValid] = useState(null);
    const [inputingPassword, setInputingPassword] = useState('');
    const [isInputingPasswordValid, setIsInputingPasswordValid] = useState(null);

    const setters = {
        email: [setInputingEmail, setIsInputingEmailValid, setIsEmailError],
        password: [setInputingPassword, setIsInputingPasswordValid, setIsPasswordError],
    };


    const handleChangeInput = ({ target: { value }}, type, regExp) => {
        setters[type][2](false);
        setters[type][0](value);

        if (regExp.test(value)) {
            setters[type][1](true);
        } else {
            setters[type][1](false);
        }

        if (value === '') {
            setters[type][1](null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isInputingEmailValid === false || inputingEmail === '') {
            setIsInputingEmailValid(false);
            setIsEmailError(true);
        }

        if (isInputingPasswordValid === false || inputingPassword === '') {
            setIsInputingPasswordValid(false);
            setIsPasswordError(true);
        }

        if (isInputingEmailValid && isInputingPasswordValid) {
            setEmail(inputingEmail);
            setPassword(inputingPassword);

            setIsInputingEmailValid(null);
            setIsInputingPasswordValid(null);

            setInputingPassword('');
            setInputingEmail('');
        }
    };

    const handleResetClick = () => {
        setIsResetClicked(true);
    };

    return (
        <div className="sign-in__login">
            <h2
                className="sign-in__heading"
            >
                Welcome back
            </h2>
            <p
                className="sign-in__text"
            >
                Sign in to continue to IO technologies
            </p>
        <form onSubmit={handleSubmit}>
            <div className="sign-in__input-wrapper">
                <input
                    value={inputingEmail}
                    className={cn(
                        'sign-in__input',
                        { 'sign-in__input--valid': isInputingEmailValid },
                        { 'sign-in__input--error': isInputingEmailValid === false},
                        { 'sign-in__input--submit-err': isEmailError }
                    )}
                    type="email"
                    placeholder="Your email"
                    onChange={event => handleChangeInput(event, 'email', /^[a-zA-Z]+[a-zA-Z0-9\.\_\-]*@[^\.]+\.+[a-zA-Z]+[a-zA-Z]+/g)}
                 />

                {isEmailError && (<p className="sign-in__error-message">Oops! Your email is not valid</p>)}
            </div>

            <div className="sign-in__input-wrapper">
                <input
                    className={cn(
                        'sign-in__input',
                        { 'sign-in__input--valid': isInputingPasswordValid },
                        { 'sign-in__input--error': isInputingPasswordValid === false },
                        { 'sign-in__input--submit-err': isPasswordError }
                    )}
                    value={inputingPassword}
                    type="password"
                    placeholder="Password"
                    onChange={event => handleChangeInput(event, 'password', /.{8,}/g)}
                />

                {isPasswordError && <p className="sign-in__error-message">Oops! Your password is not valid</p>}
            </div>

            <button
                className="sign-in__submit-btn"
                type="submit"
            >
                Log in
                <span className="arrow">🡢</span>
            </button>

            <p className="sign-in__forgotten-text">Forgot your password</p>
            <button
                type="button"
                className="sign-in__reset-btn"
                onClick={handleResetClick}
            >
                Reset
            </button>
        </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    email: getEmail(state),
    password: getPassword(state),
    isEmailError: getIsEmailError(state),
    isPasswordError: getIsPasswordError(state),
});

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setIsEmailError,
    setIsPasswordError,
    setIsResetClicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

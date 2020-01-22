import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
    setResettingEmail,
    setIsResettingEmailError,
    getIsResettingEmailError,
    setIsResetClicked
} from "./redux/store";
import cn from "classnames";

const ResetPassword = ({
  setIsResetClicked,
  setResettingEmail,
  setIsResettingEmailError,
  isResettingEmailError
}) => {
    const [inputingEmail, setInputingEmail] = useState('');
    const [isInputingEmailValid, setIsInputingEmailValid] = useState(null);

    const handleChangeInput = ({ target: { value }}, type, regExp) => {
        setIsResettingEmailError(false);
        setInputingEmail(value);

        if (regExp.test(value)) {
            setIsInputingEmailValid(true);
        } else {
            setIsInputingEmailValid(false);
        }

        if (value === '') {
            setIsInputingEmailValid(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isInputingEmailValid === false || inputingEmail === '') {
            setIsInputingEmailValid(false);
            setIsResettingEmailError(true);
        }

        if (isInputingEmailValid) {
            setResettingEmail(inputingEmail);
            setIsInputingEmailValid(null);
            setInputingEmail('');
            setIsResetClicked(false);
        }
    };

    return (
        <div className="sign-in__reset">
            <h2 className="sign-in__heading">Forgot password?</h2>
            <form onSubmit={handleSubmit}>
                <div className="sign-in__input-wrapper">
                    <input
                        value={inputingEmail}
                        className={cn(
                            'sign-in__input',
                            { 'sign-in__input--valid': isInputingEmailValid },
                            { 'sign-in__input--error': isInputingEmailValid === false},
                            { 'sign-in__input--submit-err': isResettingEmailError }
                        )}
                        type="email"
                        placeholder="Your email"
                        onChange={event => handleChangeInput(event, 'email', /[^@]+@[^\.]+\.+[a-zA-Z]+[a-zA-Z]+/g)}
                    />

                    {isResettingEmailError && (<p className="sign-in__error-message">Oops! Your email is not valid</p>)}
                </div>

                <button
                    className="sign-in__submit-btn"
                    type="submit"
                >
                    Send me instructions
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isResettingEmailError: getIsResettingEmailError(state),
});

const mapDispatchToProps = {
    setIsResetClicked,
    setResettingEmail,
    setIsResettingEmailError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

import React from 'react';
import './App.scss';
import LoginForm from "./LoginForm";
import { getEmail, getPassword, getIsResetClicked } from "./redux/store";
import { connect } from 'react-redux';
import ProjectsList from "./ProjectsList";
import ResetPassword from "./ResetPassword";

const App = ({ password, email, isResetClicked }) =>  (
    <section className="sign-in">
        <div className="sign-in__wrapper">
            <article className="sign-in__support">
                <img src="./images/logo.png" alt="IO" className="sign-in__logo"/>
                <p>Technologies</p>
                <p>Get how-to help and instructions or specific features in</p>
                <button
                    className="sign-in__support-btn"
                    type="button">
                    Help center
                </button>
                <span>or</span>
                <button
                    className="sign-in__support-btn"
                    type="button">
                    Support
                </button>
            </article>
            {!email && !password && !isResetClicked && <LoginForm />}
            {email && password && <ProjectsList />}
            {isResetClicked && <ResetPassword />}
        </div>
    </section>
);

const mapStateToProps = (state) => ({
    email: getEmail(state),
    password: getPassword(state),
    isResetClicked: getIsResetClicked(state),
});

export default connect(mapStateToProps)(App);

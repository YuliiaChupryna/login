import React from 'react';
import './styles/App.scss';
import LoginForm from "./components/LoginForm";
import { getEmail, getPassword, getIsResetClicked } from "./redux/store";
import { connect } from 'react-redux';
import ProjectsList from "./components/ProjectsList";
import ResetPassword from "./components/ResetPassword";

const App = ({ password, email, isResetClicked }) =>  (
    <section className="sign-in">
        <div className="sign-in__left-content">
            <article className="sign-in__support">
                <div className="sign-in__name">
                     <h2 className="sign-in__logo">Technologies</h2>
                </div>
                    <p className="sign-in__instruction-text">Get how-to help and instructions or specific features in</p>
                <div className="sign-in__support-buttons">
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
                </div>
            </article>
        </div>
        <div className="sign-in__right-content">
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

import React from 'react';
import { projects } from "./redux/constants";

const ProjectsList = () => {
    return (
        <div className="sign-in__projects">
            <h2
                className="sign-in__heading"
            >
                Hi, Nikita!
            </h2>
            <p
                className="sign-in__text"
            >
                Please choose your project.
            </p>
            <ul className="sign-in__projects-list">
                {projects.map(project => (
                    <>
                        <li className="sign-in__li">
                            <a className="sign-in__link" href="/">{project}</a>
                        </li>
                        <hr
                            className="sign-in__hr"
                        />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;

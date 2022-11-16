import React from "react";
import Namebar from './name';

const landingtext = () => {
    return (
        <div className="landingwrap">
            <p className="welcome-text">Welcome to</p>
            <p className="title-text">Zomaland</p>
            <Namebar/>
        </div>
    );
}

export default landingtext; 
import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./Volunteer.css";

const Volunteer = () => {
    return(
        <div className="Volunteer">
            <Header />
            <div className="volunteer-content">
                <h1>ボランティアについて</h1>
                <p>一緒にボランティアをしてみたい方は下のリンクにて応募して下さい</p>
            </div>
            <Contact />
        </div>
    );
};

export default Volunteer;
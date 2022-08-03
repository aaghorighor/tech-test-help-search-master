import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <main>
            <img className="logo u-margin-bottom" src="/sky-logo.png" alt="Sky logo" />          
            <Link to="search" className="c-text-lead btn">Let's Get Started.</Link>
        </main>
    )
}

export default Home;
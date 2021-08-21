import React from "react";
import Link from "react-router-dom/Link";

const Home = () => {

    return (
        <div>
            <h1>I'm the best home components</h1>
            <button onClick={() => { console.log("Pressed me") }}>Press me!</button>
            <Link to="/hi" >Hi</Link>
        </div>
    );
}

export default Home;
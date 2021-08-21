import React from "react";

const Home = () => {

    return (
        <div>
            <h1>I'm the best home components</h1>
            <button onClick={() => { console.log("Pressed me") }}>Press me!</button>
        </div>
    );
}

export default Home;
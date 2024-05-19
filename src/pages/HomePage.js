import {useNavigate} from "react-router-dom";
import React from "react";
import "../assets/sass/HomePage.scss";

const HomePage = () =>{

    const navigate =useNavigate()

    return (
        <div className={"homePage"}>
            <img className={"f1logo"} src="/F1.svg.png"/>
            <h2 className={"homeH1"}>LEARN MORE ABOUT RACING</h2>
            <img className={"car"} src="/car.png"/>
            <button onClick={() => navigate('/driver-info')} className={"homeButton"}> click to start</button>
        </div>
    )
};
export default HomePage;

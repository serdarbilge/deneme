import React from 'react';
import {getDriverImageByTeam} from "../utils/common";

const DriverDetails = ({ driverInfo, handleTeamInfoClick }) => {
return (
    <div className={`driver-container`}>
        {driverInfo && (
            <div className={'driver-info'}>
                <h2><span className="highlight">{driverInfo.title}</span></h2>
                <p><span className="highlight">Currently racing for: {driverInfo.team}</span></p>
                <p><span className="highlight">Number of wins: {driverInfo.win}</span></p>
                <p><span className="highlight">Number of pole positions: {driverInfo.pole}</span></p>
                <p><span className="highlight">Number of podium finishes: {driverInfo.podium}</span></p>
                <div id={'teamLogos'}>
                    {getDriverImageByTeam(driverInfo.team)}
                </div>
                <button onClick={handleTeamInfoClick} className={'teamButton'}>
                    Team Info
                </button>
            </div>
        )}
    </div>
);
};

export default DriverDetails;

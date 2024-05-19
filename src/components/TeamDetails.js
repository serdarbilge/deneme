import React from 'react';
import { getTeamImageById} from "../utils/common";

const TeamDetails = ({teamInfo}) => {
    return (
        <div className={'team-info'}>
            <h2><span className="highlight">{teamInfo.team}</span></h2>
            <p><span className="highlight">Number of wins: {teamInfo.win}</span></p>
            <p><span className="highlight">Number of pole positions: {teamInfo.pole}</span></p>
            <p><span className="highlight">Number of championships: {teamInfo.champion}</span>
            </p>
            <div id="teamLogos">
                {getTeamImageById(teamInfo.teamId)}
            </div>
        </div>
    );
};

export default TeamDetails;

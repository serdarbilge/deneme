import React, { useState, useEffect } from 'react';
import '../assets/sass/TeamInfo.scss';
import { useNavigate, useParams } from 'react-router-dom';
import TeamDetails from "../components/TeamDetails";
import {getTeamImages} from "../utils/common";

const TeamInfoPage = () => {
    const [teams, setTeams] = useState([]);
    const [teamInfo, setTeamInfo] = useState(null);
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [currentTeamIndex, setCurrentTeamIndex] = useState(teamId - 1);

    useEffect(() => {
        setTeams(getTeamImages);
    }, []);

    useEffect(() => {
        fetchTeamInfo(teamId || teams[currentTeamIndex]?.id);
    }, [teamId, currentTeamIndex, teams]);

    const fetchTeamInfo = async (id) => {
        try {
            const foundTeam = teams.find(team => team.teamId === parseInt(id));
            if (foundTeam) {
                setTeamInfo(foundTeam);
            }
        } catch (error) {
            console.error('Error fetching team info:', error);
        }
    };

    const handleNextTeam = () => {
        setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teams.length);
        const nextTeamId = teams[(currentTeamIndex + 1) % teams.length].id;
        navigate(`/team-info/${nextTeamId}`);
    };

    const handlePrevTeam = () => {
        const newIndex = currentTeamIndex === 0 ? teams.length - 1 : currentTeamIndex - 1;
        setCurrentTeamIndex(newIndex);
        const prevTeamId = teams[newIndex].id;
        navigate(`/team-info/${prevTeamId}`);
    };

    return (
        <div>
            <h1>F1 TEAMS</h1>
            <div className={"teampage"}>
                <div>
                    <button onClick={handlePrevTeam} className={'prevButton'}>
                        <img className={"prevbtn"} src="/arrow-141-48.png" alt=" prev Button Image"/>
                    </button>
                </div>
                <div className={`team-container`}>
                    {teamInfo && (
                        <TeamDetails teamInfo={teamInfo}/>
                    )}
                    <div>
                        <button onClick={() => navigate('/driver-info')} className={"driverButton"}>
                            Driver Info
                        </button>
                    </div>
                </div>
                <div>
                    <button onClick={handleNextTeam} className={'nextButton'}>
                        <img className={"nextbtn"} src="/arrow-141-48.png" alt=" next Button Image"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamInfoPage;

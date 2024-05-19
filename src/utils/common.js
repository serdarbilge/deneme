import React from "react";

export const getDriverImages=()=>{

    const imageList = [
        {
            id: 1,
            title: "Max Verstappen",
            team: "Red Bull",
            url: "/max.avif",
            win: "54",
            pole:"32",
            podium:"98"
            ,teamId:1
        },
        {
            id: 2,
            title: "Checo Perez",
            team: "Red Bull",
            url: "/perez.avif",
            win: "6",
            pole:"3",
            podium:"35"
            ,teamId:1
        },
        {
            id: 3,
            title: "Lewis Hamilton",
            team: "Mercedes",
            url: "/hamilton.avif",
            win: "103",
            pole:"104",
            podium:"197"
            ,teamId:2

        },
        {
            id: 4,
            title: "Fernando Alonso",
            team: "Aston Martin",
            url: "/fernando.avif",
            win: "32",
            pole:"22",
            podium:"106"
            ,teamId:3

        },
        {
            id: 5,
            title: "Charles Leclerc",
            team: "Scuderia Ferrari",
            url: "/leclerc.avif",
            win: "5",
            pole:"19",
            podium:"25"
            ,teamId:4
        },
        {
            id: 6,
            title: "Lando Norris",
            team: "McLaren",
            url: "/lando.avif",
            win: "0",
            pole:"1",
            podium:"13"
            ,teamId:5
        },
        {
            id: 7,
            title: "Carlos Sainz",
            team: "Scuderia Ferrari",
            url: "/sainz.avif",
            win: "2",
            pole:"5",
            podium:"18"
            ,teamId:4
        },
        {
            id: 8,
            title: "George Russel",
            team: "Mercedes",
            url: "/george.avif",
            win: "1",
            pole:"2",
            podium:"11"
            ,teamId:2
        },
        {
            id: 9,
            title: "Oscar Piastri",
            team: "McLaren",
            url: "/oscar.avif",
            win: "0",
            pole:"0",
            podium:"2"
            ,teamId:5
        },
        {
            id: 10,
            title: "Yuki Tsunoda",
            team: "Alpha Tauri",
            url: "/yuki.avif",
            win: "0",
            pole:"0",
            podium:"17"
            ,teamId:6
        },
    ];
    return imageList;
};


export const getTeamImages =() =>{


    const teamList = [
        {
            id: 1,
            team: "Red Bull",
            url: "/red bull.avif",
            win: "113",
            pole: "94",
            champion: "6",
            teamId: 1
        },
        {
            id: 2,
            team: "Mercedes",
            url: "/mercedes.avif",
            win: "126",
            pole: "137",
            champion: "8",
            teamId: 2
        },
        {
            id: 3,
            team: "Aston Martin",
            url: "/aston.avif",
            win: "0",
            pole: "1",
            champion: "0",
            teamId: 3
        },
        {
            id: 4,
            team: "Scuderia Ferrari",
            url: "/ferrari.avif",
            win: "244",
            pole: "249",
            champion: "16",
            teamId: 4
        },
        {
            id: 5,
            team: "McLaren",
            url: "/mclaren.avif",
            win: "184",
            pole: "156",
            champion: "8",
            teamId: 5
        },
        {
            id: 6,
            team: "Alpha Tauri",
            url: "/AlphaTauri.avif",
            win: "0",
            pole: "0",
            champion: "0",
            teamId: 6
        },
    ];

    return teamList;
}

export const getTeamImageById = (teamId) => {
    switch (teamId) {
        case 1:
            return <img src="/red%20bull.avif" alt="Red Bull Logo"/>;
        case 2:
            return <img src="/mercedes.avif" alt="Mercedes Logo"/>;
        case 3:
            return <img src="/aston.avif" alt="Aston Martin Logo"/>;
        case 4:
            return <img src="/ferrari.avif" alt="Ferrari Logo"/>;
        case 5:
            return <img src="/mclaren.avif" alt="McLaren Logo"/>;
        case 6:
            return <img src="/AlphaTauri.webp" alt="Alpha Tauri Logo"/>;
        default:
            return null;
    }
};

export const getDriverImageByTeam = (team) => {
    switch (team) {
        case "Red Bull":
            return <img src="/red%20bull.avif" alt="Red Bull Logo"/>;
        case "Mercedes":
            return <img src="/mercedes.avif" alt="Mercedes Logo"/>;
        case "Aston Martin":
            return <img src="/aston.avif" alt="Aston Martin Logo"/>;
        case "Scuderia Ferrari":
            return <img src="/ferrari.avif" alt="Ferrari Logo"/>;
        case "McLaren":
            return <img src="/mclaren.avif" alt="McLaren Logo"/>;
        case "Alpha Tauri":
            return <img src="/AlphaTauri.webp" alt="Alpha Tauri Logo"/>;
        default:
            return null;
    }

};
import React from 'react';
import './assets/sass/DriverInfo.scss';
import './assets/sass/TeamInfo.scss';
import './assets/sass/HomePage.scss';

import DriverInfo from './pages/DriverInfoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamInfo from './pages/TeamInfoPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <div className="App">
                <title>F1 App</title>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/driver-info" element={<DriverInfo/>}/>
                    <Route path="/team-info/:teamId" element={<TeamInfo/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

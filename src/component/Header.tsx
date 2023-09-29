import React from 'react';
import {useTeamDataContext} from "../context/TeamDataProvider";

const Header = () => {
    // Access the "selectedTeam" value from the context
    const { selectedTeam } = useTeamDataContext(); // Replace with your actual context

    return (
        <div>
            <h1>Kotlin Team Viewer</h1>
            <h2>Selected Team: {selectedTeam ? selectedTeam : ""}</h2>
        </div>
    );
};

export default Header
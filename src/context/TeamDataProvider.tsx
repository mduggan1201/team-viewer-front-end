import React, {createContext, FunctionComponent, useContext, useState, ReactNode} from 'react';

const TeamDataContext = createContext<TeamContextType | undefined>(undefined);

export const TeamDataForTesting = TeamDataContext.Provider

export const useTeamDataContext = ():TeamDataContextInterface => {
    const context = useContext(TeamDataContext);
    if (!context) {
        throw new Error('useTeamDataContext must be used within a TeamDataProvider');
    }
    return context;
}

export type TeamContextType = {
    selectedTeam: string;
    setSelectedTeam: (team: string) => void;
};

type TeamDataProviderProps = {
    children: ReactNode;
};

export const TeamDataProvider: FunctionComponent<TeamDataProviderProps> = ({ children }) => {
    const [selectedTeam, setSelectedTeam] = useState<string>('');

    return (
        <TeamDataContext.Provider value={{selectedTeam, setSelectedTeam}}>
            {children}
        </TeamDataContext.Provider>
    );
}

export default TeamDataProvider

export interface TeamDataContextInterface {
    selectedTeam: string;
    setSelectedTeam: (team: string) => void;
}
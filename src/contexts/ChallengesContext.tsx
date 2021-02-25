import { createContext, ReactNode, useState} from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps{
    children : ReactNode;
}

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level : number;
    currentExp : number;
    challengesCompleted : number;
    levelUp : () => void;
    startNewChallenge : () => void; 
    activeChallenge: Challenge;
    resetChallenge: () => void;
}

export const ChallengesContext = createContext({  } as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [challengesCompleted, setchallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    function levelUp(){ 
      setLevel(level+1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }
  
    return(
        <ChallengesContext.Provider 
        value={{level, currentExp, challengesCompleted, levelUp, startNewChallenge, activeChallenge, resetChallenge}}>
            {children}
        </ChallengesContext.Provider>
    );
}
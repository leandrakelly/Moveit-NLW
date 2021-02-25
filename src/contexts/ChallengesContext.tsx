import { createContext, ReactNode, useState} from 'react';

interface ChallengesProviderProps{
    children : ReactNode;
}

interface ChallengesContextData{
    level : number;
    currentExp : number;
    challengesCompleted : number;
    levelUp : () => void;
    startNewChallenge : () => void; 
}

export const ChallengesContext = createContext({  } as ChallengesContextData);

export function ChallengesProvider({children}){
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [challengesCompleted, setchallengesCompleted] = useState(0);

    function levelUp(){
      setLevel(level+1);
    }

    function startNewChallenge(){

    }
  
    return(
        <ChallengesContext.Provider 
        value={{level, currentExp, challengesCompleted, levelUp, startNewChallenge}}>
            {children}
        </ChallengesContext.Provider>
    );
}
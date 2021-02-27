import { createContext, ReactNode, useContext, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengesProviderProps{
    children : ReactNode;
    level: number;
    currentExp: number;
    challengesCompleted: number; 
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
    experienceToNextLevel: number;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export const ChallengesContext = createContext({  } as ChallengesContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4 , 2);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    useEffect( () => {
        Notification.requestPermission();
    }, [] );

    useEffect( () => {
        Cookies.set('level', String(level));
        Cookies.set('CurrentExp', String(currentExp));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    } , [level, currentExp, challengesCompleted] )

    function levelUp(){ 
      setLevel(level+1);
      setIsLevelUpModalOpen(true);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play;

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
        return;
        }
        const { amount } = activeChallenge;
        let finalExperience = currentExp + amount;
        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExp(finalExperience);
        setActiveChallenge(null);
        setchallengesCompleted(challengesCompleted+1);
    }
  
    return(
        <ChallengesContext.Provider 
        value={{level, currentExp, challengesCompleted, levelUp, startNewChallenge, activeChallenge, resetChallenge
        , experienceToNextLevel, completeChallenge, closeLevelUpModal}}>
            {children}
            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}
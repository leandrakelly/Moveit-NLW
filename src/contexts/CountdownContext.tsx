import { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';

interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children : ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
let countdownTimeOut: NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps){
    const { startNewChallenge, levelUp } = useContext(ChallengesContext);
    const [time, setTime] = useState(25 * 60); //tempo em segundos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
        
    const minutes = Math.floor(time / 60); //nao pegar número quebrado
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        setIsActive(false);
        clearTimeout(countdownTimeOut);
        setTime(0.1 * 60); //25 minutos
        setHasFinished(false);
    }

    useEffect( () => {
        if(isActive && time > 0) 
            countdownTimeOut = setTimeout( () => {
                setTime(time-1);
            },1000)
        else if(isActive && time==0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider 
        value={{ minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown }}>
             {children}
        </CountdownContext.Provider>
    )
}
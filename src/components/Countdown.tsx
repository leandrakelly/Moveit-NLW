import { useState, useEffect, useContext} from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeOut: NodeJS.Timeout;

export function Countdown(){
    const [time, setTime] = useState(0.1 * 60); //tempo em segundos
    const [isActive, setIsActive] = useState(false);
    const [hasFiniched, setHasFiniched] = useState(false);

    const { startNewChallenge } = useContext(ChallengesContext);

    const minutes = Math.floor(time / 60); //nao pegar número quebrado
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        setIsActive(false);
        clearTimeout(countdownTimeOut);
        setTime(0.1 * 60); //25 minutos
    }

    useEffect( () => {
        if(isActive && time > 0) 
            countdownTimeOut = setTimeout( () => {
                setTime(time-1);
            },1000)
        else if(isActive && time==0){
            setHasFiniched(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <div> 
            <div className={styles.countdownContainer}>
                {/*Minutos */}
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                {/*Segundos */}
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFiniched ? 
                <>
                <button
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
                <div className={styles.greenBar} />
                </>
            : (
                <>
                {isActive ?(
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}>
                        Abandonar ciclo ✖
                    </button>
                ) : (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={startCountdown}>
                        Iniciar ciclo ➤
                    </button>
                )}
                </>
            )}

        </div> 
    );
}
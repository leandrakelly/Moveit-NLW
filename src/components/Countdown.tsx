import {useContext} from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown(){

    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

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
            {hasFinished ? 
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
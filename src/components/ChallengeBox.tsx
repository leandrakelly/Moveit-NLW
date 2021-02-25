import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasChallenge = true;
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handlleChanllengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handlleChanllengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {/* Desafio ativo */}
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="icon"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handlleChanllengeFailed}>
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceedButton}
                        onClick={handlleChanllengeSucceeded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <>
                {/*Não tem desafio */}
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level-up"/>
                        Avance de level completando desafios
                    </p>
                </div>
                </>
            )}
            
        </div>
    );
}
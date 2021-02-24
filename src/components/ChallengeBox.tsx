import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            {/* Desafio ativo */}
            {hasChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg" alt="icon"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>
                    
                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceedButton}>
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
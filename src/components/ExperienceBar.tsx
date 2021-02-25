import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/Components/ExperienceBar.module.css'

export function ExperienceBar(){
    
    const { currentExp, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExp * 100) / experienceToNextLevel;

    return(
      <header className={styles.experienceBar}>
          <span>0 xp</span>
          <div>
              <div style={{width:`${percentToNextLevel}%`}} />
              <span className={styles.currentexp} style={{left:`${percentToNextLevel}%`}}> {currentExp} xp </span>
          </div>
          <span>{experienceToNextLevel} xp</span>
      </header>  
    );
}
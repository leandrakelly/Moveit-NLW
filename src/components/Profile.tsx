import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
  const { level } = useContext(ChallengesContext);

    return(
      <div className={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/77417705?s=460&u=09404d5c5472278778cd62066478195e3db1534b&v=4" alt="Kelly"/>
          <div>
              <strong> Leandra Kelly </strong>
              <p>
              <img src="icons/level.svg" alt="icon"/>
                  Level {level}
            </p>
          </div>
      </div>   
    );
}
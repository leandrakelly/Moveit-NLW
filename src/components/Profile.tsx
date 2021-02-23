import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
      <div className={styles.profileContainer}>
          <img src="https://avatars.githubusercontent.com/u/77417705?s=460&u=09404d5c5472278778cd62066478195e3db1534b&v=4" alt="Kelly"/>
          <div>
              <strong> Diego Fernandes </strong>
              <p>
              <img src="icons/level.svg" alt="icon"/>
                  Level 1
            </p>
          </div>
      </div>   
    );
}
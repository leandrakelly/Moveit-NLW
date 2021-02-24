import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenges} from '../components/CompletedChallenges';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>  
    <Head>
      <title>Início | Move.it</title>
    </Head>
     <ExperienceBar/>
     <section>
       {/*Lado esquerdo da pag */}
       <div>
         <Profile />
         <CompletedChallenges />
         <Countdown />
       </div>
      {/*Lado direito da pag */}
       <div>
         <ChallengeBox />
       </div>
     </section>

    </div>
  );
}

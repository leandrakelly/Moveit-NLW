import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenges} from '../components/CompletedChallenges';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';
import {GetServerSideProps} from 'next';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

interface HomeProps{
  level: number;
  currentExp: number;
  challengesCompleted: number; 
}

export default function Home(props : HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExp={props.currentExp} 
    challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>  
    <Head>
      <title>Início | Move.it</title>
    </Head>
     <ExperienceBar/>
     <CountdownProvider>
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
     </CountdownProvider>
    </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {

  const {level, currentExp, challengesCompleted} = ctx.req.cookies;

  return{
    props : {
    level: Number(level),
    currentExp: Number(currentExp),
    challengesCompleted: Number(challengesCompleted),
    }
  }
} 

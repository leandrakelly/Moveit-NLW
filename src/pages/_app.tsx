import '../styles/Global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ChallengesProvider></ChallengesProvider>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

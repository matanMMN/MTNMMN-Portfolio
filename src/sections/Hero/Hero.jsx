import styles from './HeroStyles.module.css';
import profileIMG from '../../assets/MTN MMN profile picture circle.png';
import sun from '../../assets/sun.svg'; 
import moon  from '../../assets/moon.svg';
import linkedinDark  from '../../assets/linkedin-dark.svg';
import githubDark  from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg'
import CV from '../../assets/CV - MATAN MAMAN - Frontend Developer..pdf'
import  {useTheme} from '../../common/ThemeContext';

function Hero() {
const {theme , toggleTheme} = useTheme();

const themeIcon = theme ==='light' ? sun : moon;
const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
const GithubIcon = theme ==='light' ? githubLight : githubDark;
 

return (
   <section id="hero" className={styles.container}> 
  <div className={styles.colorModeContainer}>
    <img 
    id="profileImg" 
    className={styles.hero}
    src={profileIMG}
    alt="profile picture of Matan Maman" />
    <img
     className={styles.colorMode} 
     src={themeIcon}
     alt="color mode icon"
     onClick = {toggleTheme}/>
    
    </div> 
    <div className={styles.info}>
    <h1>Matan <br /> Maman</h1>
    <h2>Fronted Developer</h2>
    <span>
        <a href='https://www.linkedin.com/in/matan-maman12' target='_blank'>
        <img src={linkedinIcon} alt= "linkedIn icon"/></a>
        <a href='https://github.com/matanMMN' target='_blank'>
        <img src={GithubIcon} alt= "Github icon"/></a>
    </span>
    <p className={styles.description}>I am currently looking to integrate into a development team.
        Willing to work hard and eager to learn new skills,
        solve problems and face new challenges.
         Enjoy working as part of a team,
         committed, dedicated and responsible.</p>
    <a href={CV} download>
        <button className='hover' > Resume </button>
    </a>
    </div>
   </section> 
  )
}

export default Hero
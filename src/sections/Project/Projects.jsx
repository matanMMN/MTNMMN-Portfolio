import React from 'react'
import styles from './ProjectsStyles.module.css'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png'

const projectsArr = [
  {
    src: viberr ,
    link:'https://github.com/matanMMN',
    h3:"viberr",
    p:"Streming app"
  },

  {
    src: freshBurger ,
    link:'https://github.com/matanMMN',
    h3:"FreshBurger",
    p:"Hamburger shop"
  },
  
  {
    src: hipsster,
    link: 'https://github.com/matanMMN',
    h3: 'Hipsster',
    p: 'Glasses shop'
  },

  {
    src: fitLift,
    link: 'https://github.com/matanMMN',
    h3: 'FitLift',
    p: 'Fitness App'
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.container} >
        
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}> 
      {projectsArr.map((project, index) =>
      <ProjectCard
        key={index}
        src={project.src}
        link={project.link}
        h3={project.h3}
        p={project.p}
        />
    )}
      </div>
        </section>
  )
}

export default Projects
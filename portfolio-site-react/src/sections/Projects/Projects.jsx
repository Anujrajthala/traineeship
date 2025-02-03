import React from 'react'
import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className= "sectionTitle">Projects</h1>
        <div className= {styles.projectsContainer}>
           <ProjectCard src = {viberr} link = 'https://google.com/'
           h3='Viberr'
           p='Streaming App'
           />
            <ProjectCard src = {freshBurger} link = 'https://google.com/'
           h3='Fresh Burger'
           p='Hamburger Restaurant'
           />
            <ProjectCard src = {hipsster} link = 'https://google.com/'
           h3='Hipsster'
           p='Glasses Shop'
           />
            <ProjectCard src = {fitLift} link = 'https://google.com/'
           h3='FitLift'
           p='Fitness App'
           />
        </div>
    </section>
  )
}

export default Projects
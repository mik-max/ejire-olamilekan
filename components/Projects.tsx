import React from 'react'
import styles from './Projects.module.css';
import Image from 'next/image';
function Projects() {
     return (
          <section className={styles.designSection}>
               <h1>Explore Recent Project</h1>
               <div className={styles.processes}>
                    <div className={styles.card}>
                         <Image src='/images/project1.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <Image src='/images/project2.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <Image src='/images/project3.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>

                         <Image src='/images/project4.png' alt = 'research' width = {200} height = {200} />
                    </div>
               </div>
          </section>
     )
}

export default Projects
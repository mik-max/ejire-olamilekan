import React from 'react'
import Image from 'next/image'
import styles from './Design.module.css';
function Design() {
     return (
          <section className={styles.designSection}>
               <h1>My Design Process</h1>
               <div className={styles.processes}>
                    <div className={styles.card}>
                         <p>User Research</p>
                         <Image src='/images/user-research.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>Journey Mapping</p>
                         <Image src='/images/user-journey.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>Wireframing</p>
                         <Image src='/images/wireframing.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>User Flows</p>
                         <Image src='/images/user-flow.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>Design</p>
                         <Image src='/images/design.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>Prototyping</p>
                         <Image src='/images/prototyping.png' alt = 'research' width = {200} height = {200} />
                    </div>
                    <div className={styles.card}>
                         <p>User Testing</p>
                         <Image src='/images/user-testing.png' alt = 'research' width = {200} height = {200} />
                    </div>
               </div>
          </section>
     )
}

export default Design
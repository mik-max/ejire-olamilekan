import React from 'react'
import Image from 'next/image'
import styles from './Banner.module.css';
import Header from './Header';
function Banner() {
     return (
          <section className={styles.bannerSection}>
               <Header/>
               <div className={styles.banner}>
                    <div className= {styles.introDiv}>
                         <h6>Welcome to my site!</h6>
                         <h1>Hi! I am Lekan UI UX <span>Designer</span></h1>
                         <p>Lobortis amet, nulla quis pellentesque ultrices ut sed ullamcorper. landit blandit ac purus turpis pharetra at. Mauris, sed sed ultrices rhoncus.</p>
                         <div className={styles.buttonDiv}>
                              <button className={styles.containedButton} >Hire Me</button>
                              <button className={styles.outlinedButton}>View My Portfolio</button>
                         </div>
                    </div>
                    <div className={styles.ImageDiv}>
                         <div className={styles.imageBg}>
                              <Image src="/images/profile.png" alt="logo" width={460} height= {543} className ={styles.profileImage} />
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Banner
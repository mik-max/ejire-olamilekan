import React from 'react'
import styles from './Connect.module.css'
import Link from 'next/link'
function Connect() {
     return (
          <section className={styles.connectSection}>
               <div className={styles.introDiv}>
                    <h1>Want Us To Work Together On A Project?</h1>
               </div>
               <div className={styles.buttonDiv}>
                    <Link href = 'https://wa.me/+2347061510958?text=Hi%Lekan'>Lets Connect</Link>
               </div>
          </section>
     )
}

export default Connect
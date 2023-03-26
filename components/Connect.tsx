import React from 'react'
import styles from './Connect.module.css'
import Link from 'next/link'
function Connect() {
     return (
          <section className={styles.connectSection}>
               <div className={styles.introDiv}>
                    <h1>Want Us To Work Together On A Project?</h1>
               </div>
               <div className={styles.contactForm}>
                    <form action="">
                         <div className={styles.inputWrapper}>
                              <input type="text" placeholder='Name' />
                              <input type="email" name="" id="" placeholder='Email Address' />
                         </div>
                         <div className={styles.textareaWrapper}>
                              <textarea name="" id="" className={styles.textarea} placeholder= 'Message' ></textarea>
                         </div>
                         {/* <div className={styles.buttonDiv}>
                              <Link href = 'https://wa.me/+2347061510958?text=Hi%Lekan'>Submit</Link>
                         </div> */}
                         <div className={styles.buttonDiv}>
                              <button>Submit</button>
                         </div>
                    </form>
                    
               </div>
               
               <div className={styles.introDiv}>
                    <h1>Contact Me</h1>
               </div>
               <div className={styles.contact}>
                    <p><strong>Call Line: </strong><a href="tel:+2349126064182">09126064182</a></p>
                    <p><strong>Whatsapp: </strong><Link href = 'https://wa.me/+2347061510958?text=Hi%Lekan'>07061510958</Link></p>
                    <p><strong>Email: </strong><a href="mailto:ejireolamilekan@gmail.com">ejireolamilekan@gmail.com</a></p>
               </div>
          </section>
     )
}

export default Connect
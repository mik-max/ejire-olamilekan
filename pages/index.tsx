import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Design from '../components/Design';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Connect from '../components/Connect';
import Projects from '../components/Projects';
export default function Home() {
     return (
          <div>
               <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet"href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
               </Head>

               <Banner/>
               <Design/>
               <Projects/>
               <Carousel/>
               <Connect/>
               <hr />
               <footer className={styles.footer}>
                    <p className={styles.copyright}>Copyright © 2023.Ejire Olamilekan</p>
                    <ul className={styles.footerMenu}>
                         <li>
                              <a href=""><i className='bx bxl-linkedin'></i></a>
                         </li>
                         <li>
                              <a href=""><i className='bx bxl-facebook'></i></a>
                         </li>
                         <li>
                              <a href=""><i className='bx bxl-twitter'></i></a>
                         </li>
                    </ul>
               </footer>
               
          </div>
     )
}

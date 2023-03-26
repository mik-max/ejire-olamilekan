import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Head from 'next/head';
function Header() {

     const [toggleDropdown, setToggleDropdown] = useState(false)
     return (
          <header className={styles.header}>
               <Head>
                    <link rel="stylesheet"href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
               </Head>
               <nav className={styles.nav}>
                    <Link href="/">
                         <Image src="/images/logo.png" alt="logo" width={120} height= {24} />
                    </Link>
                    <ul className={styles.menu}>
                         <li><Link href=''>About me</Link></li>
                         <li><Link href=''>Skills</Link></li>
                         <li><Link href=''>Portfolio</Link></li>
                         <li><Link href=''>Contact</Link></li>
                    </ul>

                    <i className='bx bx-menu' onClick={() => {setToggleDropdown(!toggleDropdown)}}></i>
               </nav>
               {
                    toggleDropdown && <div className={styles.menu2Wrapper}>
                    <ul className={styles.menu2}>
                         <li><Link href=''>About me</Link></li>
                         <li><Link href=''>Skills</Link></li>
                         <li><Link href=''>Portfolio</Link></li>
                         <li><Link href=''>Contact</Link></li>
                    </ul>
               </div>
               }
          </header>
     )
}

export default Header
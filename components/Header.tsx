import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
function Header() {
     return (
          <header className={styles.header}>
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
               </nav>
          </header>
     )
}

export default Header
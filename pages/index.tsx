import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {MapPin, Mail, Github} from 'lucide-react'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <></>
            </Head>

            <div className={styles.heroWrapper}>
                <h1 className={styles.name}>{'Hi, I\'m Danila Abramov.'}</h1>
                <div className={styles.locationWrapper}>
                    <MapPin/>
                    <div className={styles.locationText}>Samara, Russia</div>
                </div>
                <Link href='mailto:danila.abramov.ssau@gmail.com' className={styles.contactWrapper}>
                    <Mail/>
                    <div className={styles.contactText}>danila.abramov.ssau@gmail.com</div>
                </Link>
                <Link href='https://github.com/danilaabramov' className={styles.contactWrapper}>
                    <Github/>
                    <div className={styles.contactText}>/danilaabramov</div>
                </Link>
                <p className={styles.paragraphText}>{'I\'m a full-stack developer. Currently looking for a job'}</p>
            </div>
        </div>
    )
}

export default Home

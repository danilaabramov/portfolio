import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {MapPin} from 'lucide-react'
import Link from 'next/link'
import Card from "@/components/Card";
import {SiGithub, SiMaildotru, SiTelegram} from '@icons-pack/react-simple-icons'
import {Meta} from "next/dist/lib/metadata/generate/meta";

const Home: NextPage = () => {

    interface Project {
        title: string,
        desc: string,
        picture: string,
        link: string
    }

    let Projects: Project[] = [
        {
            title: 'Chat',
            desc: 'Messenger for communicating with your friends',
            picture: 'https://abramov.pw/images/chat.png',
            link: 'https://chat.abramov.pw'
        },
        {
            title: 'CollabDev',
            desc: 'A site for finding a team for hackathons and startups',
            picture: 'https://abramov.pw/images/collabdev.png',
            link: 'https://collabdev.ru'
        }
    ]

    return (
        <div>
            <Head>
                <Meta name="theme-color" content="#fff" />
            </Head>

            <main className={styles.container}>
                <section className={styles.heroWrapper}>
                    <h1 className={styles.name}>{'Hi, I\'m Danila Abramov.'}</h1>
                    <div className={styles.locationWrapper}>
                        <MapPin/>
                        <div className={styles.locationText}>Samara, Russia</div>
                    </div>
                    <p className={styles.paragraphText}>{'I\'m a full-stack developer. Currently looking for a job'}</p>
                    <div className={styles.socialWrapper}>
                        <Link href='https://t.me/danila_abramov' target="_blank" className={styles.contactWrapper}>
                            <SiTelegram size={44}/>
                        </Link>
                        <Link href='mailto:danila.abramov.ssau@gmail.com' target="_blank" className={styles.contactWrapper}>
                            <SiMaildotru size={44}/>
                        </Link>
                        <Link href='https://github.com/danilaabramov' target="_blank" className={styles.contactWrapper}>
                            <SiGithub size={44}/>
                        </Link>
                    </div>
                </section>

                <section className={styles.cardsWrapper}>
                    {
                        Projects.map((item, index) => {
                            return <div key={index}>
                                <Card title={item.title} desc={item.desc} picture={item.picture} link={item.link}/>
                            </div>
                        })
                    }
                </section>
            </main>

            <footer className={styles.footer}>
                Copyright © 2023 Abramov Danila. All rights reserved.
            </footer>
        </div>
    )
}

export default Home

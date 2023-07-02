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
            picture: '/images/chat.png',
            link: 'https://chat.abramov.pw'
        },
        {
            title: 'CollabDev',
            desc: 'A site for finding a team for hackathons and startups',
            picture: 'images/collabdev.png',
            link: 'https://collabdev.ru'
        }
    ]

    let colors: string[] = [
        '#CD6E3C', '#145C57'
    ]

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type='image/svg' sizes='32x32' href="/favicon.ico"/>
            </Head>
            <main className={styles.container}>

                <div className="background-animation">
                    <div id="ball-one"></div>
                    <div id="ball-two"></div>
                    <div id="ball-three"></div>
                    <div className="gradient"></div>
                </div>

                <section className={styles.heroWrapper}>
                    <div style={{display: 'flex'}}>
                        <h1 className={styles.name}>{/*Hi, I{'\''}m */}Danila</h1>
                    </div>
                    <div style={{display: 'flex'}}>
                        <h1 className={styles.name} style={{color: 'transparent'}}>Abra</h1>
                        <p style={{width: '16vw'}} className={styles.paragraphText}>
                            I{'\''}m a full-stack developer. Currently looking for a job
                        </p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            height: '13vw',
                            margin: '3vw 3vw 0 0',
                            width: '21vw'
                        }}>
                            <div className={styles.socialWrapper}>
                                <Link href='https://t.me/danila_abramov' target="_blank"
                                      className={styles.contactWrapper}>
                                    <SiTelegram size='3.5vw'/>
                                </Link>
                                <Link href='mailto:danila.abramov.ssau@gmail.com' target="_blank"
                                      className={styles.contactWrapper}>
                                    <SiMaildotru size='3.5vw'/>
                                </Link>
                                <Link href='https://github.com/danilaabramov' target="_blank"
                                      className={styles.contactWrapper}>
                                    <SiGithub size='3.5vw'/>
                                </Link>
                            </div>
                            <div className={styles.locationWrapper}>
                                <MapPin size='1.7vw'/>
                                <div className={styles.locationText}>Samara, Russia</div>
                            </div>
                        </div>
                        <h1 className={styles.name} style={{color: 'transparent'}}>mov</h1>
                    </div>
                </section>

                <section className={styles.cardsContainer}>
                    <div className={styles.cardsWrapper}>
                        <h1 style={{fontSize: 50, width: 'calc(100vw - 40px)', maxWidth: 930}}>Pet projects</h1>
                        {
                            Projects.map((item, index) => {
                                return <div key={index}>
                                    <Card title={item.title} desc={item.desc} picture={item.picture} link={item.link}
                                          color={colors[index]}/>
                                </div>
                            })
                        }
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                Copyright © 2023 Abramov Danila. All rights reserved.
            </footer>
        </>
    )
}

export default Home

"use client"

import React, {useState} from "react";
import styles from '@/styles/Home.module.css'
import {MapPin} from 'lucide-react'
import Link from 'next/link'
import Card from "@/components/Card";
import {SiGithub, SiMaildotru, SiTelegram} from '@icons-pack/react-simple-icons'
import Footer from "@/components/Footer";

function Home() {

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
        },
        {
            title: 'Blog',
            desc: 'The site is accessible to everyone for writing articles on technology and IT',
            picture: 'images/blog.png',
            link: 'https://blog.abramov.pw'
        }
    ]

    let colors: string[] = ['#CD6E3C', '#145C57', '#121846']

    const [st, setSt] = useState(0)

    return (
        <>
            <main className={styles.container}>
                <div style={{height: 0}}>
                    <div className="background-animation">
                        <div id="ball-one"></div>
                        <div id="ball-two"></div>
                        <div id="ball-three"></div>
                        <div className="gradient"></div>
                    </div>
                </div>

                <section className={styles.heroWrapper}>
                    <div className='flex'>
                        <h1 className={styles.name}>Danila</h1>
                    </div>
                    <div className='flex'>
                        <h1 className={styles.nameTransparent}>Abra</h1>
                        <p className={styles.paragraphText}>
                            I{'\''}m a full-stack developer. Currently looking for a job
                        </p>
                    </div>
                    <div className='flex'>
                        <div className={styles.socialContainer}>
                            <div className={styles.socialWrapper}>
                                <Link href='https://t.me/danila_abramov' target="_blank"
                                      className={styles.contactWrapper}>
                                    <SiTelegram size='3.5vw'/>
                                </Link>
                                <Link href='mailto:danila@abramov.pw' target="_blank"
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
                        <h1 className={styles.nameTransparent}>mov</h1>
                    </div>
                </section>

                <section className={styles.cardsContainer}>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.mainTitle}>
                            <p className='light'>Based on the latest technologies
                                <strong> pet projects </strong>
                                developed using advanced technologies
                            </p>
                        </div>
                        {
                            Projects.map((item: Project, index: number) => {
                                return <div key={index}>
                                    <Card title={item.title} desc={item.desc} picture={item.picture} link={item.link}
                                          color={colors[index]}/>
                                </div>
                            })
                        }
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Home

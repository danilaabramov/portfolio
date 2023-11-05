"use client"

import React from "react";
import styles from '@/styles/Home.module.css'
import {MapPin} from 'lucide-react'
import Link from 'next/link'
import Card from "@/app/Card";
import {SiGithub, SiMaildotru, SiTelegram} from '@icons-pack/react-simple-icons'

export interface Project {
    title: string,
    subtitle: string,
    desc: string,
    picture: string,
    link: string,
    stack: string[]
}

export default function Home() {

    let Projects: Project[] = [
        {
            title: 'Chat',
            subtitle: '',
            desc: 'Messenger for communicating with your friends',
            picture: '/images/projects/chat.png',
            link: 'https://chat.abramov.pw',
            stack: ['Next.js', 'Redis', 'Pusher']
        },
        {
            title: 'CollabDev',
            subtitle: '(beta)',
            desc: 'A site for finding a team for hackathons and startups',
            picture: 'images/projects/collabdev.png',
            link: 'https://collabdev.ru',
            stack: ['React.js', 'Django', 'MongoDB']
        },
        {
            title: 'Blog',
            subtitle: '',
            desc: 'The site is accessible to everyone for writing articles on technology and IT',
            picture: 'images/projects/blog.png',
            link: 'https://blog.abramov.pw',
            stack: ['React.js', 'Node.js', 'MongoDB']
        }
    ]

    let colors: string[] = ['#CD6E3C', '#145C57', '#121846']

    return (
        <main>
            <section className={styles.heroWrapper}>
                <div style={{height: 0}}>
                    <div id="ball-one"/>
                    <div id="ball-two"/>
                    <div id="ball-three"/>
                    <div id="ball-4"/>
                </div>

                <div className='flex'>
                    <div style={{height: 0, zIndex: 1, width: 0}}>
                        <img style={{width: 'min(8vw, 150px)', transform: 'translate(-300px, 240px)'}}
                             src='images/keys/keys-05-blur.png' alt='key'/>
                    </div>
                    <div style={{height: 0, zIndex: 1, width: 0}}>
                        <img style={{width: 'min(8vw, 150px)', transform: 'translate(-170px, 130px)'}}
                             src='images/keys/keys-04-blur.png' alt='key'/>
                    </div>
                    <div style={{height: 0, zIndex: 1, width: 0}}>
                        <img style={{
                            width: 'min(47vw, 460px)',
                            transform: 'translate(min(0.6vw, 7px), min(0.6vw, 7px))'
                        }}
                             src='images/keys/keys-01.png' alt='key'/>
                    </div>
                    <div style={{height: 0, zIndex: 1, width: 0}}>
                        <img style={{width: 'min(8vw, 70px)', transform: 'translate(min(5vw, 49px), min(15vw, 147px))'}}
                             src='images/keys/keys-02.png' alt='key'/>
                    </div>
                    <div style={{height: 0, zIndex: 1, width: 0}}>
                        <img style={{
                            width: 'min(6vw, 60px)',
                            transform: 'translate(min(48vw, 480px), min(34vw, 330px))'
                        }}
                             src='images/keys/keys-03.png' alt='key'/>
                    </div>

                    <h1 className={styles.name}>Danila</h1>
                </div>
                <div className='flex'>
                    <h1 className={styles.nameTransparent}>Abra</h1>
                    <p className={styles.paragraphText}>
                        Hi! I{'\''}m a full-stack developer. Now I work at Banks Soft Systems.
                        {/*Currently looking for a job*/}
                    </p>
                </div>
                <div className='flex'>
                    <div className={styles.socialContainer}>
                        <div className={styles.socialWrapper}>
                            <Link href='https://t.me/danila_abramov' target="_blank"
                                  className={styles.contactWrapper}>
                                <SiTelegram size='min(6vw, 59px)'/>
                            </Link>
                            <Link href='mailto:danila@abramov.pw' target="_blank"
                                  className={styles.contactWrapper}>
                                <SiMaildotru size='min(6vw, 59px)'/>
                            </Link>
                            <Link href='https://github.com/danilaabramov' target="_blank"
                                  className={styles.contactWrapper}>
                                <SiGithub size='min(6vw, 59px)'/>
                            </Link>
                        </div>
                        <div className={styles.locationWrapper}>
                            <MapPin size='min(2.2vw, 22px)'/>
                            <div className={styles.locationText}>Samara, Russia</div>
                        </div>
                    </div>
                    <h1 className={styles.nameTransparent}>mov</h1>
                </div>
            </section>

            <section className={styles.cardsContainer}>
                <div className="gradient" style={{margin: -20}}/>
                <div className={styles.cardsWrapper}>
                    <h1 className={styles.mainTitle + ' light'}>Based on the latest technologies
                        <strong> pet projects </strong>
                        developed using advanced technologies
                    </h1>
                    {
                        Projects.map((item: Project, index: number) => {
                            return <div key={index}>
                                <Card project={item} color={colors[index]}/>
                            </div>
                        })
                    }
                </div>
            </section>
        </main>
    )
}

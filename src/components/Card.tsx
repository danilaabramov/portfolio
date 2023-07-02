import Image from 'next/image'
import styles from '@/styles/Card.module.css'
import Link from "next/link";
import {ArrowRight} from "lucide-react";

interface CardProps {
    title: string,
    desc: string,
    picture: string,
    link: string,
    color: string
}

const Card = ({title, desc, picture, link, color}: CardProps) => {
    return <div className={styles.cardWrapper} style={{background: color}}>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
            <Link href={link} className={styles.link} style={{color}}>
                <span>See the Live Site</span>
                <ArrowRight/>
            </Link>
        </div>
        <div className={styles.scrin}>
            <Image fill style={{width: '100%', height: '100%'}} src={picture}
                   alt='project-scrin'/>
        </div>
    </div>
}

export default Card;


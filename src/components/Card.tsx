import Image from 'next/image'
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import styled from "styled-components";
import React from "react";

interface CardProps {
    title: string,
    desc: string,
    picture: string,
    link: string,
    color: string
}

const CardContainer = styled.div`
  min-height: 440px;
  width: calc(100vw - 32px);
  max-width: 930px;
  background: #181818;
  border-radius: 15px;
  padding: 40px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  border-width: 1px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16);
  
  @media(max-width: 931px) {
    padding: 20px;
  }
`

const Info = styled.div`
  flex: 1 0 310px;
  max-width: calc(100%);

  @media(max-width: 931px) {
    max-width: calc(100vw - 72px);
  }
`

const Title = styled.h1`
  font-size: 36px;
  margin: 10px 0;
`

const Desc = styled.p`
  font-size: 16px;
  margin: 30px 0;
`

const Button = styled.div`
  
  & a {
    font-size: 18px;
    background: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    gap: 10px;
    transition: all .2s;
    font-weight: 600;
    font-family: Inter, sans-serif;
  }

  //& a span {
  //  transition: transform .2s;
  //}

  & a:hover {
    transform: scale(1.02);
    transition: scale .2s;
    gap: 30px;
  }

  //& a:hover span {
  //  transform: translate(10px);
  //  transition: transform .2s;
  //}

  @media(max-width: 931px) {
    width: calc(100vw - 72px);
  }
`

const Screen = styled.div`
  width: 510px;
  transform: translate(12%, 20%);
  display: flex;
  flex: 1 0 510px;
  aspect-ratio: 14 / 9;

  @media(max-width: 931px) {
    margin: -20px;
    transform: translate(0%, 9%);
  }
`

function Card({title, desc, picture, link, color}: CardProps) {
    return (
        <CardContainer style={{background: color}}>
            <Info>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Button>
                    <Link href={link} style={{color}}>
                        <span>See the Live Site</span>
                        <ArrowRight/>
                    </Link>
                </Button>
            </Info>
            <Screen>
                <Image fill style={{width: '100%', height: '100%'}} src={picture}
                       alt='project-scrin'/>
            </Screen>
        </CardContainer>
    )
}

export default Card;


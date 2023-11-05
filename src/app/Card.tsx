"use client"

import Image from 'next/image'
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import styled from "styled-components";
import React from "react";
import {Project} from "@/app/page";

interface CardProps {
    project: Project,
    color: string
}

const CardContainer = styled.div`
  width: calc(100vw - 32px);
  max-width: 930px;
  background: #181818;
  border-radius: 0 30px 30px 30px;
  border-width: 1px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16);
  margin-top: 60px;
`

const CardWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  padding: 0 40px 40px 40px;
  border-radius: 30px;

  @media (max-width: 891px) {
    padding: 0 20px 20px 20px;
  }
`

const Info = styled.div`
  flex: 1 0 310px;
  max-width: 100%;
`

const Title = styled.h1`
  font-size: 36px;
  margin: 10px 0;
  display: flex;
  position: absolute;
`

const Desc = styled.p`
  font-size: 16px;
  margin: 80px 0 30px;
  font-family: Martian Mono, sans-serif;
`

const Button = styled.div`
  width: calc(100% + 20px);
  height: 65px;
  overflow: hidden;
  padding: 10px;
  margin: -10px;

  &::after {
    display: block;
    position: relative;
    top: -81px;
    content: '';
    background: transparent;
    width: 100%;
    height: 10px;
  }

  & a .button-content .arrow span {
    background: #fff;
    border-radius: 15px;
    width: 45px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scale2 .3s ease-in;
    -webkit-animation: scale2 .3s ease-in;
  }

  & a .button-content .arrow {
    transition: all .2s;
    width: 100%;
  }

  & a .button-content p {
    transition: all .2s;
    background: #fff;
    border-radius: 15px;
    width: calc(100% - 45px);
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(45px, -63px);
    font-size: 18px;
    font-weight: 600;
  }

  & a:hover .button-content p {
    transform: translate(0, -63px);
    transition: all .2s;
  }

  & a:hover .button-content .arrow {
    transform: translateX(calc(100% - 45px));
    transition: all .2s;
  }

  & a:hover .button-content .arrow span {
    animation: scale1 .3s ease-in;
    -webkit-animation: scale1 .3s ease-in;
  }

  @keyframes scale1 {
    10% {
      transform: scale(.5);
    }
    85% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes scale2 {
    10% {
      transform: scale(.5);
    }
    85% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`

const Screen = styled.div`
  transform: translate(12%, 20%);
  display: flex;
  flex: 1 0 510px;
  aspect-ratio: 14 / 9;
  pointer-events: none;

  @media (max-width: 931px) {
    flex: 1 0 570px;
    margin: -30px;
    transform: translate(0%, 9%);
  }

  @media (max-width: 891px) {
    transform: translate(0%, 9%);
  }
`

const Stack = styled.div<{ color: string }>`
  background: transparent;
  height: 0;
  width: 100%;
  display: flex;
  justify-content: right;
  
  & span {
    width: 100%;
    height: 70px;
    transform: translateY(-60px);
    border-radius: 30px 30px 0 0;
    background: ${(props): string => props.color};;
  }

  & div {
    transform: translate(0px, -60px);
    height: 60px;
    background: transparent;
    border-radius: 30px;
    box-shadow: -30px 30px 0 ${(props): string => props.color};
    display: flex;

    & p {
      height: 50px;
      padding: 15px;
      margin: 0 0 10px 10px;
      background: #222222;
      border-radius: 25px;
      line-height: 20px
    }
  }
`

export default function Card({project, color}: CardProps) {
    return (
        <CardContainer style={{background: color}}>
            <Stack color={color}>
                <span/>
                <div>{project.stack.map((tool: string, index) => <p key={index}>{tool}</p>)}</div>
            </Stack>
            <CardWrapper>
                <Info>
                    <Title>{project.title}
                        <div className='light' style={{fontSize: 15}}>{project.subtitle}</div>
                    </Title>
                    <Desc>{project.desc}</Desc>
                    <Button>
                        <Link href={project.link} style={{color}}>
                            <div className='button-content'>
                                <div className='arrow'><span><ArrowRight/></span></div>
                                <p>See the Live Site</p>
                            </div>
                        </Link>
                    </Button>
                </Info>
                <Screen>
                    <Image fill style={{width: '100%', height: '100%'}} src={project.picture}
                           alt='project-scrin'/>
                </Screen>
            </CardWrapper>
        </CardContainer>
    )
}
"use client"

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  z-index: 1;
  position: absolute;
  transform: translateY(-300px);
`

const FooterWrapper = styled.div`
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #010001;
  width: 100vw;
  text-align: center;
  flex-direction: column;
`

export default function Footer() {
    return (
        <FooterContainer>
            <div className="gradient" style={{transform: 'rotate(180deg)'}}></div>
            <FooterWrapper>Copyright © 2023 Danila Abramov. All rights reserved.</FooterWrapper>
        </FooterContainer>
    )
};


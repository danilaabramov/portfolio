import '@/styles/globals.css'
import type {Metadata} from 'next'
import StyledComponentsRegistry from "@/lib/registry";
import React, {ReactNode} from "react";
import Head from "next/head";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
    title: 'Danila Abramov | Portfolio',
    description: 'FullStack developer',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type='image/svg' sizes='32x32' href="/public/favicon.ico"/>
        </Head>
        <body>
        <StyledComponentsRegistry>
            {children}
            <Footer/>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

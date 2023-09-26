import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import StyledComponentsRegistry from "@/lib/registry";
import {NextFont} from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Abramov Danila | Portfolio',
    description: 'FullStack developer',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Suspense} from "react";
import Loading from "@/app/components/Loading";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Suspense fallback={<Loading/>}>
            <body className={inter.className}>{children}</body>
        </Suspense>
        </html>
    )
}

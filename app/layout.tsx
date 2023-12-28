import {Footer} from '@/app/ui/footer'
import {Header} from '@/app/ui/header'
import {Navigation} from '@/app/ui/navigation'
import {config} from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import type {Metadata} from 'next'
import {Plus_Jakarta_Sans} from 'next/font/google'
import React from 'react'
import './globals.css'

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

const plusJakartaSans = Plus_Jakarta_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Easy Message',
    description: 'F*cking Easy Message app with high performance and scalable storage.'
}

export default async function RootLayout({
                                             children
                                         }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={plusJakartaSans.className}>
        <main style={{
            height: 'calc(100vh - var(--toolbar-height))',
            marginTop: 'var(--toolbar-height)'
        }}>
            <Header/>
            <Navigation/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    )
}

import {Footer} from '@/app/ui/footer'
import {config} from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
import type {Metadata, Viewport} from 'next'
import {Plus_Jakarta_Sans} from 'next/font/google'
import React from 'react'
import './globals.css'

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

const plusJakartaSans = Plus_Jakarta_Sans({subsets: ['latin']})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',

}

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
            flex: 1,
            overflowY: 'auto',
            display: 'flex'
        }}>

            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}

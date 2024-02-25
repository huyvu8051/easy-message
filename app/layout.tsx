import {Footer} from '@/app/footer'
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
    viewportFit: 'cover'

}

export const metadata: Metadata = {
    title: 'Easy ConversationType',
    description: 'F*cking Easy ConversationType app with high performance and scalable storage.'
}

export default async function RootLayout({
                                             children
                                         }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body className={plusJakartaSans.className}>
        {children}
        <Footer/>
        </body>
        </html>
    )
}

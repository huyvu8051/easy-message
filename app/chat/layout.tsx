import {SystemProvider} from '@/app/systemProvider'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}){

    return (
        <SystemProvider>
            {children}
        </SystemProvider>
    )
}
'use client'
import {SystemProvider} from '@/app/systemProvider'
import React, {useEffect, useState} from 'react'
import {Socket} from 'socket.io-client'
import io from 'socket.io-client'

export default function Layout({children}: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<Socket>()


    return (
        <SystemProvider>
            {children}
        </SystemProvider>
    )
}
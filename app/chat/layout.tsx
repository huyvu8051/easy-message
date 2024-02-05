'use client'
import {QueryProvider} from '@/components/providers/query-provider'
import {SocketProvider} from '@/components/providers/socket-provider'
import {SessionProvider} from 'next-auth/react'
import React, {useState} from 'react'
import {Socket} from 'socket.io-client'

export default function Layout({children}: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<Socket>()


    return (
        <QueryProvider>
            <SocketProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </SocketProvider>
        </QueryProvider>
    )
}
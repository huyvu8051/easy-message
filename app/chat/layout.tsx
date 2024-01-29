'use client'
import {SystemProvider} from '@/app/systemProvider'
import React, {useEffect, useState} from 'react'
import {Socket} from 'socket.io-client'
import io from 'socket.io-client'

export default function Layout({children}: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<Socket>()

    useEffect(() => {
        // Create a socket connection
        const socket = io({path: '/api/socket'});

        // Listen for incoming messages
        socket.on('message', (message) => {
            console.log('message on ', message)
        });

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);


    return (
        <SystemProvider>
            {children}
        </SystemProvider>
    )
}
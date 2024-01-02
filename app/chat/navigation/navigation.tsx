'use client'

import {Header} from '@/app/chat/navigation/header'
import styles from '@/app/chat/navigation/navigation.module.css'
import React from 'react'
import {ConvAvatar} from "@/app/chat/convAvatar";
import {ConversationType} from "@/app/chat/conversation.type";
import {ConvDetails} from "@/app/chat/navigation/convDetails";


const conversations: ConversationType[] = [
    {
        id: '1',
        coverImg: '/assets/img/conversation-cover.png',
        name: 'Darlene Steward',
        lastMsgTimeFmt: '18:31',
        lastMsgCnt: 'Pls take a look at the images.',
        lastMsgCount: 5,
        send: false,
        status: 'busy'
    },
    {
        id: '2',
        coverImg: '/assets/img/4f6dc3624a44fb5e01e406158e3d1b49.jpg',
        name: 'Fullsnack Designers',
        lastMsgTimeFmt: '16:04',
        lastMsgCnt: 'Hello guys, we have discussed about ...',
        lastMsgCount: 0,
        send: false,
        status: 'none'
    }, {
        id: '3',
        coverImg: '/assets/img/1bd4dd6069428f64473bd4e633b7c00b.png',
        name: 'Lee Williamson',
        lastMsgTimeFmt: '06:12',
        lastMsgCnt: 'Yes, that’s gonna work, hopefully. ',
        lastMsgCount: 0,
        send: false,
        status: 'online'
    }, {
        id: '4',
        coverImg: '/assets/img/34d0c3811e30299006dfa8f78b2cd446.png',
        name: 'Ronald Mccoy',
        lastMsgTimeFmt: 'Yesterday',
        lastMsgCnt: 'Thanks dude 😉',
        lastMsgCount: 0,
        send: true,
        status: 'offline'
    }, {
        id: '5',
        coverImg: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        name: 'Albert Bell',
        lastMsgTimeFmt: 'Yesterday',
        lastMsgCnt: 'I‘m happy this anime has such grea...',
        lastMsgCount: 0,
        send: false,
        status: 'offline'
    }]

export function Navigation() {
    const handleOpenConv = (item: ConversationType) => {
        console.log('open conversation', item)
    }


    return (
        <nav className={styles.navigation}>
            <Header/>
            <ul>
                {conversations.map((e: ConversationType) => {
                    return (
                        <li key={e.id} onClick={() => handleOpenConv(e)}>
                            <ConvAvatar item={e}/>
                            <ConvDetails item={e}/>
                            <div style={{clear: 'both'}}></div>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}
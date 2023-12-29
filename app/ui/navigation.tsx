'use client'

import {Header} from '@/app/ui/header'
import style from '@/app/ui/navigation.module.css'
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

const {
    convCover,
    statusCircle,
    navigation,
    convCoverImg,
    convDetails,
    convUpper,
    convName,
    lastMsgTime,
    convLower,
    lastMsgContent,
    iconSend,
    lastMsgCount
}
    = style

type Conversation = {
    id: string,
    lastMsgCnt: string,
    coverImg: string,
    name: string,
    lastMsgCount: number,
    lastMsgTimeFmt: string,
    send: boolean,
    status: string
}

const getAvatarName = (name: string): string => {
    let strings = name.split('\s')
    if (strings.length > 1) return strings[0].charAt(0) + strings[1].charAt(0)
    if (strings.length > 0) {
        if (strings[0].length > 1) return strings[0].slice(0, 1)
        return strings[0].charAt(0)
    }
    return ''
}

const conversations: Conversation[] = [
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
    const handleOpenConv = () => {
        console.log('open conversation')
    }


    return (
        <nav className={navigation}>
            <Header/>
            <ul>
                {conversations.map((e: Conversation) => {
                    return (
                        <li key={e.id} onClick={handleOpenConv}>
                            <div className={convCover}>
                                {/*DS*/}
                                <img src={e.coverImg} alt={`${e.name} cover image.`} className={convCoverImg}/>
                                <div className={statusCircle}/>
                            </div>
                            <div className={convDetails}>
                                <div className={convUpper}>
                                    <p className={convName}>{e.name}</p>
                                    <p className={lastMsgTime}>{e.lastMsgTimeFmt}</p>
                                </div>
                                <div className={convLower}>
                                    <p className={lastMsgContent}>
                                        {e.send && <FontAwesomeIcon className={iconSend}
                                                                    icon={faCheckDouble}/>} {e.lastMsgCnt}</p>
                                    {e.lastMsgCount > 0 && <p className={lastMsgCount}>{e.lastMsgCount}</p>}
                                </div>
                            </div>
                            <div style={{clear: 'both'}}></div>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}
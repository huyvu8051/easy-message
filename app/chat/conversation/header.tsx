import React from "react";
import styles from '@/app/chat/conversation/header.module.css'
import {ConvAvatar} from "@/app/chat/convAvatar";
import {ConvDetails} from "@/app/chat/navigation/convDetails";

const {header} = styles


export function Header() {
    const item = {
        id: '5',
        coverImg: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        name: 'Albert Bell',
        lastMsgTimeFmt: 'Yesterday',
        lastMsgCnt: 'I‘m happy this anime has such grea...',
        lastMsgCount: 0,
        send: false,
        status: 'offline'
    }
    return (
        <header className={header}>
            <ConvAvatar item={item}/>
            <ConvDetails item={item}/>
        </header>
    )
}
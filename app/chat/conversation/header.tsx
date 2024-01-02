import React from "react";
import styles from '@/app/chat/conversation/header.module.css'
import {ConvAvatar} from "@/app/chat/convAvatar";
import {ConvDetails} from "@/app/chat/navigation/convDetails";
import {ConvVideoCallBtn} from "@/app/chat/conversation/convVideoCallBtn";
import {ConvOptionBtn} from "@/app/chat/conversation/convOptionBtn";

export function Header() {
    const item = {
        id: '5',
        coverImg: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        name: 'Albert Bell',
        lastMsgTimeFmt: '',
        lastMsgCnt: '7 Online, from 12 peoples',
        lastMsgCount: 0,
        send: false,
        status: 'offline'
    }
    return (
        <header className={styles.header}>
            <ConvAvatar item={item}/>
            <ConvDetails item={item} style={{width: 'calc(100% - 160px)'}}/>
            <ConvOptionBtn/>
            <ConvVideoCallBtn/>
        </header>
    )
}
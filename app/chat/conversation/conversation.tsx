'use client'

import styles from '@/app/chat/conversation/conversation.module.css'
import {Header} from '@/app/chat/conversation/header'
import {ParagraphContainer} from '@/app/chat/conversation/paragraphContainer'
import {TextField} from '@/app/chat/conversation/textField'
import {useSideNav} from '@/app/chat/SideNavContext'
import {useChatSocket} from '@/hooks/use-chat-socket'
import React, {useLayoutEffect, useRef} from 'react'

let SortedSet = require('collections/sorted-set')

export type Member = {
    name: string,
    role: string,
    uId: number,
    avatar: string,
    status: string,
}

export type MessageContent = {
    content: string,
    msgTime: number,
    msgTimeFmt?: string,
    uId: number,
    cId: number,
    paragraph?: Paragraph
}


export type Paragraph = {
    convId: number,
    user?: Member,
    userId: number,
    uMsgTime: number,
    uMsgTimeFmt?: string,
    msgContents: MessageContent[]
}



type PushMessageHandleable = {
    handlePushMessage: (messageContent: MessageContent) => void
}

export function Conversation() {
    const {isSideNavOpen} = useSideNav()
    const paragraphContainerRef = useRef<PushMessageHandleable>(null)

    const chatId = 4
    const queryKey = `chat:${chatId}`
    const addKey = `chat:${chatId}:messages`
    const updateKey = `chat:${chatId}:messages:update`


    useChatSocket({queryKey, addKey, updateKey})

    console.log('Conversation')
    return (
        <div className={styles.container} style={isSideNavOpen ? {} : {}}>
            <Header/>
            <ParagraphContainer ref={paragraphContainerRef}/>
            <TextField
                onPushMessage={(messageContent) => paragraphContainerRef.current?.handlePushMessage(messageContent)}/>
        </div>
    )
}
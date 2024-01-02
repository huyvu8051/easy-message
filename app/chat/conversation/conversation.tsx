'use client'

import {ConvAvatar} from '@/app/chat/convAvatar'
import styles from '@/app/chat/conversation/conversation.module.css'
import {Header} from '@/app/chat/conversation/header'
import {useSideNav} from '@/app/chat/SideNavContext'
import React from 'react'


type MessageContent = {
    content: string,
    msgTime: number,
    msgTimeFmt: string
}


type Paragraph = {
    convId: number,
    uId: number,
    uFullNm: string,
    uAvatar: string,
    uRole: string,
    uMsgTime: number,
    uMsgTimeFmt: string,
    uStatus: string,
    msgContents: MessageContent[]
}
const paragraphs: Paragraph[] = [
    {
        convId: 1,
        uId: 1,
        uFullNm: 'Mike Mazowski',
        uAvatar: '/public/assets/img/0915363a2c70375926d3e4a60ea94e15.png',
        uRole: 'Admin',
        uMsgTime: 12345687,
        uMsgTimeFmt: '16:04',
        uStatus: 'online',
        msgContents: [
            {
                content: 'Hello guys, we have discussed the post-corona vacation plan, and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images of our destination.',
                msgTime: 12345678,
                msgTimeFmt: '16:04'
            },
            {
                content: 'Check out these amazing beaches in Bali!',
                msgTime: 12345688,
                msgTimeFmt: '16:05'
            }
        ]
    },
    {
        convId: 2,
        uId: 2,
        uFullNm: 'Sully Sullivan',
        uAvatar: '/public/assets/img/another_avatar.png',
        uRole: 'User',
        uMsgTime: 12345689,
        uMsgTimeFmt: '16:06',
        uStatus: 'offline',
        msgContents: [
            {
                content: 'Sounds like a fantastic plan! I can\'t wait for the party!',
                msgTime: 12345690,
                msgTimeFmt: '16:07'
            },
            {
                content: 'I heard Bali has great local cuisine. Can\'t wait to try it!',
                msgTime: 12345691,
                msgTimeFmt: '16:08'
            }
        ]
    },
    {
        convId: 3,
        uId: 3,
        uFullNm: 'Boo',
        uAvatar: '/public/assets/img/yet_another_avatar.png',
        uRole: 'User',
        uMsgTime: 12345692,
        uMsgTimeFmt: '16:09',
        uStatus: 'online',
        msgContents: [
            {
                content: 'I just booked my flight to Bali! Super excited!',
                msgTime: 12345693,
                msgTimeFmt: '16:10'
            },
            {
                content: 'Do we have a plan for sightseeing?',
                msgTime: 12345694,
                msgTimeFmt: '16:11'
            }
        ]
    }
    // Add more paragraph objects if needed
]


export function Conversation() {
    const {isSideNavOpen} = useSideNav()


    return (
        <div className={styles.container} style={isSideNavOpen ? {} : {}}>
            <Header/>
            <div className={styles.paragraphs}>
                <div className={styles.paragraph}>
                    <div className={styles.authorAvatar}>
                        <ConvAvatar size={40} name={''} coverImg={'/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png'}/>
                    </div>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>Audax, grandis gabaliums unus quaestio de altus, lotus
                            sensorem.
                        </div>
                        <div className={styles.message}>Parmas volare in regius brigantium!</div>
                        <div className={styles.message}>Parma brevis tus est.</div>
                    </div>
                </div>

                <div className={`${styles.paragraph} ${styles.currentParagraph}`}>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>Audax, grandis gabaliums unus quaestio de altus, lotus
                            sensorem.
                        </div>
                        <div className={styles.message}>Parmas volare in regius brigantium!</div>
                        <div className={styles.message}>Parma brevis tus est.</div>
                    </div>
                </div>


            </div>
        </div>
    )
}
'use client'

import {ConvAvatar} from '@/app/chat/convAvatar'
import styles from '@/app/chat/conversation/conversation.module.css'
import {Header} from '@/app/chat/conversation/header'
import {TextField} from '@/app/chat/conversation/textField'
import {useSideNav} from '@/app/chat/SideNavContext'
import React, {useCallback, useState} from 'react'


export type MessageContent = {
    content: string,
    msgTime: number,
    msgTimeFmt: string,
    uId: number
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
        uAvatar: '/assets/img/0915363a2c70375926d3e4a60ea94e15.png',
        uRole: 'Admin',
        uMsgTime: 32345687,
        uMsgTimeFmt: '16:04',
        uStatus: 'online',
        msgContents: [
            {
                uId: 1,
                content: 'Hello guys, we have discussed the post-corona vacation plan, and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images of our destination.',
                msgTime: 12345678,
                msgTimeFmt: '16:04',
            },
            {
                uId: 1,
                content: 'Check out these amazing beaches in Bali!',
                msgTime: 12345688,
                msgTimeFmt: '16:05',
            }
        ]
    },
    {
        convId: 2,
        uId: 2,
        uFullNm: 'Sully Sullivan',
        uAvatar: '/assets/img/1bd4dd6069428f64473bd4e633b7c00b.png',
        uRole: 'User',
        uMsgTime: 22345689,
        uMsgTimeFmt: '16:06',
        uStatus: 'offline',
        msgContents: [
            {
                uId: 2,
                content: 'Sounds like a fantastic plan! I can\'t wait for the party!',
                msgTime: 12345690,
                msgTimeFmt: '16:07'
            },
            {
                uId: 2,
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
        uAvatar: '/assets/img/4f6dc3624a44fb5e01e406158e3d1b49.jpg',
        uRole: 'User',
        uMsgTime: 12345692,
        uMsgTimeFmt: '16:09',
        uStatus: 'online',
        msgContents: [
            {
                uId: 3,
                content: 'I just booked my flight to Bali! Super excited!',
                msgTime: 12345693,
                msgTimeFmt: '16:10'
            },
            {
                uId: 3,
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

    const [paras, setParas] = useState(paragraphs.sort((a, b)=>a.uMsgTime - b.uMsgTime))


    const handlePushMessage = useCallback((message: MessageContent) => {
        if(paras[paras.length - 1].uId === message.uId){
            paras[paras.length - 1].msgContents.push(message)
            setParas([...paras])
        }else {

        }
    }, [paras])

    console.log('render')

    return (
        <div className={styles.container} style={isSideNavOpen ? {} : {}}>
            <Header/>
            <div className={styles.paragraphs}>
                {
                    paras.map(paraItem=>(
                        <div key={paraItem.uMsgTime} className={styles.paragraph}>
                            <div className={styles.authorAvatar}>
                                <ConvAvatar size={34} name={''} coverImg={paraItem.uAvatar}/>
                            </div>
                            <div className={styles.paragraphContent}>
                                {
                                    paraItem.msgContents.map((msgItem, msgIndex)=>(
                                        <div key={msgItem.msgTime} className={styles.message}>
                                            {
                                                !msgIndex && (
                                                    <div className={styles.msgHeader}>
                                                        <div className={styles.msgHeaderAuthorName}>
                                                            {paraItem.uFullNm}
                                                        </div>
                                                        <div className={styles.msgHeaderAuthorRole}>
                                                            {paraItem.uRole}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className={styles.msgText}>
                                                {msgItem.content}
                                            </div>
                                            {
                                                !msgIndex && (
                                                    <div className={styles.msgFooter}>
                                                        <div className={styles.msgFooterTime}>
                                                            {msgItem.msgTimeFmt}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                {/*<div className={styles.paragraph}>
                    <div className={styles.authorAvatar}>
                        <ConvAvatar size={34} name={''} coverImg={'/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png'}/>
                    </div>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>
                            <div className={styles.msgHeader}>
                                <div className={styles.msgHeaderAuthorName}>
                                    Mike Mazowski
                                </div>
                                <div className={styles.msgHeaderAuthorRole}>
                                    admin
                                </div>
                            </div>
                            <div className={styles.msgText}>
                                Hello guys, we have discussed about post-corona vacation plan and our decision is to go
                                to Bali. We will have a very big party after this corona ends! These are some images
                                about our destination
                            </div>
                            <div className={styles.msgFooter}>
                                <div className={styles.msgFooterTime}>
                                    16:04
                                </div>
                            </div>
                        </div>
                        <div className={styles.message}>
                            <div className={styles.msgText}>
                                Parmas volare in regius brigantium!
                            </div>
                        </div>
                        <div className={styles.message}>Parma brevis tus est.</div>
                    </div>
                </div>

                <div className={`${styles.paragraph} ${styles.currentParagraph}`}>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>
                            <div className={styles.msgText}>
                                Audax, grandis gabaliums unus quaestio de altus, lotus
                                sensorem.
                            </div>
                            <div className={styles.msgFooter}>
                                <div className={styles.msgFooterTime} style={{color: '#fff'}}>
                                    16:04
                                </div>
                            </div>
                        </div>
                        <div className={styles.message}>Parmas volare in regius brigantium!</div>
                        <div className={styles.message}>Parma brevis tus est.</div>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.authorAvatar}>
                        <ConvAvatar size={34} name={''} coverImg={'/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png'}/>
                    </div>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>Not heavens or chaos, forget the silence.
                        </div>
                        <div className={styles.message}>Teres, neuter habenas aegre convertam de fortis, placidus
                            exemplar.
                        </div>
                        <div className={styles.message}>Zetas sunt rumors de neuter candidatus.</div>
                        <div className={styles.message}>Barcass sunt detriuss de raptus eleates.</div>
                    </div>
                </div>

                <div className={`${styles.paragraph} ${styles.currentParagraph}`}>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>
                            Audax amors ducunt ad detrius.
                        </div>
                    </div>
                </div>

                <div className={styles.paragraph}>
                    <div className={styles.authorAvatar}>
                        <ConvAvatar size={34} name={''} coverImg={'/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png'}/>
                    </div>
                    <div className={styles.paragraphContent}>
                        <div className={styles.message}>Accentors peregrinationes!
                        </div>

                    </div>
                </div>*/}

            </div>
            <TextField onPushMessage={handlePushMessage}/>
        </div>
    )
}
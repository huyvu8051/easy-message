'use client'

import {ConvAvatar} from '@/app/chat/convAvatar'
import styles from '@/app/chat/conversation/conversation.module.css'
import {Header} from '@/app/chat/conversation/header'
import {TextField} from '@/app/chat/conversation/textField'
import {useSideNav} from '@/app/chat/SideNavContext'
import React, {useCallback, useEffect, useRef, useState} from 'react'

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


type Paragraph = {
    convId: number,
    user?: Member,
    userId: number,
    uMsgTime: number,
    uMsgTimeFmt?: string,
    msgContents: MessageContent[]
}

const members: Member[] = [
    {
        name: 'John Doe',
        role: 'Developer',
        uId: 1,
        avatar: 'https://example.com/avatar1.jpg',
        status: 'Active'
    },
    {
        name: 'Jane Doe',
        role: 'Designer',
        uId: 2,
        avatar: 'https://example.com/avatar2.jpg',
        status: 'Inactive'
    },
    {
        name: 'Alice Smith',
        role: 'Manager',
        uId: 3,
        avatar: 'https://example.com/avatar3.jpg',
        status: 'Active'
    },
    {
        name: 'Bob Johnson',
        role: 'Tester',
        uId: 4,
        avatar: 'https://example.com/avatar4.jpg',
        status: 'Active'
    },
    {
        name: 'Eve Brown',
        role: 'Analyst',
        uId: 5,
        avatar: 'https://example.com/avatar5.jpg',
        status: 'Inactive'
    },
    {
        name: 'Charlie Green',
        role: 'Product Owner',
        uId: 6,
        avatar: 'https://example.com/avatar6.jpg',
        status: 'Active'
    },
    {
        name: 'Grace Taylor',
        role: 'Scrum Master',
        uId: 7,
        avatar: 'https://example.com/avatar7.jpg',
        status: 'Inactive'
    },
    {
        name: 'David White',
        role: 'Architect',
        uId: 8,
        avatar: 'https://example.com/avatar8.jpg',
        status: 'Active'
    },
    {
        name: 'Frank Miller',
        role: 'DevOps Engineer',
        uId: 9,
        avatar: 'https://example.com/avatar9.jpg',
        status: 'Active'
    },
    {
        name: 'Sarah Wilson',
        role: 'UX Designer',
        uId: 10,
        avatar: 'https://example.com/avatar10.jpg',
        status: 'Inactive'
    }
]


const messages: MessageContent[] = [
    {
        content: 'Hey, how are you doing today?',
        msgTime: Date.now() - 100000,
        uId: 1,
        cId: 1
    },
    {
        content: 'I just finished a great book. Have you read anything interesting lately?',
        msgTime: Date.now() - 200000,
        uId: 2,
        cId: 1
    }, {
        content: 'It all',
        msgTime: Date.now() - 210000,
        uId: 2,
        cId: 1
    }, {
        content: 'Thanks',
        msgTime: Date.now() - 220000,
        uId: 2,
        cId: 1
    },
    {
        content: 'What\'s your favorite type of music?',
        msgTime: Date.now() - 300000,
        uId: 3,
        cId: 1
    },
    {
        content: 'I tried a new recipe for dinner last night. It was delicious!',
        msgTime: Date.now() - 400000,
        uId: 4,
        cId: 1
    },
    {
        content: 'I think it great!',
        msgTime: Date.now() - 410000,
        uId: 4,
        cId: 1
    },
    {
        content: 'Just wanted to remind you about the meeting at 2 PM today.',
        msgTime: Date.now() - 500000,
        uId: 5,
        cId: 1
    },
    {
        content: 'I\'m planning a hiking trip next weekend. Do you want to join?',
        msgTime: Date.now() - 600000,
        uId: 6,
        cId: 1
    },
    {
        content: 'Have you seen the latest movie? It\'s getting great reviews.',
        msgTime: Date.now() - 700000,
        uId: 7,
        cId: 1
    },
    {
        content: 'Working on a new project. Excited to share the updates soon!',
        msgTime: Date.now() - 800000,
        uId: 8,
        cId: 1
    },
    {
        content: 'Just adopted a new pet. Meet my adorable puppy!',
        msgTime: Date.now() - 900000,
        uId: 9,
        cId: 1
    },
    {
        content: 'Visited a beautiful place over the weekend. Check out these photos!',
        msgTime: Date.now() - 1000000,
        uId: 10,
        cId: 1
    },
    {
        content: 'Finished a coding project today. Feeling accomplished!',
        msgTime: Date.now() - 1100000,
        uId: 1,
        cId: 1
    },
    {
        content: 'What\'s your favorite travel destination?',
        msgTime: Date.now() - 1200000,
        uId: 2,
        cId: 1
    },
    {
        content: 'Attended an interesting workshop on machine learning. Mind-blowing stuff!',
        msgTime: Date.now() - 1300000,
        uId: 3,
        cId: 1
    },
    {
        content: 'The weather is amazing today! Perfect for outdoor activities.',
        msgTime: Date.now() - 1400000,
        uId: 4,
        cId: 1
    },
    {
        content: 'Trying out a new fitness routine. Any tips for staying motivated?',
        msgTime: Date.now() - 1500000,
        uId: 5,
        cId: 1
    },
    {
        content: 'Attending a virtual conference next week. Excited to learn new things.',
        msgTime: Date.now() - 1600000,
        uId: 6,
        cId: 1
    },
    {
        content: 'Just got a promotion at work! Celebrating this achievement.',
        msgTime: Date.now() - 1700000,
        uId: 7,
        cId: 1
    },
    {
        content: 'Any book recommendations? I\'m looking for a good read.',
        msgTime: Date.now() - 1800000,
        uId: 8,
        cId: 1
    },
    {
        content: 'Started a new hobby – painting. It\'s therapeutic!',
        msgTime: Date.now() - 1900000,
        uId: 9,
        cId: 1
    },
    {
        content: 'Visited a historical museum over the weekend. Fascinating artifacts!',
        msgTime: Date.now() - 2000000,
        uId: 10,
        cId: 1
    }
]


export function Conversation() {
    const {isSideNavOpen} = useSideNav()

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const [sortedSetMsgs, setSortedSetMsg] = useState(new SortedSet([], (a: MessageContent, b: MessageContent) => a.msgTime === b.msgTime, (a: MessageContent, b: MessageContent) => b.msgTime - a.msgTime))

    const [paragraphs, setParagraphs] = useState<Paragraph[]>([])


    /**
     *
     * @param msg
     */
    const pushNewBlankParagraph = (msg: MessageContent) => {
        const found = members.find(mem => mem.uId === msg.uId)
        const para = {
            user: found,
            userId: msg.uId,
            uMsgTime: msg.msgTime,
            msgContents: [msg],
            convId: msg.cId,
            uMsgTimeFmt: msg.msgTime + ''
        }
        paragraphs.push(para)
        msg.paragraph = para
    }

    function pushMsgIntoParagraph(msg: MessageContent, paragraph: Paragraph) {
        msg.paragraph = paragraph

        for (let i = 0; i < paragraph.msgContents.length; i++) {
            if (paragraph.msgContents[i].msgTime < msg.msgTime) {
                paragraph.msgContents.splice(i + 1, 0, msg)
                return
            }
        }

        paragraph.msgContents.push(msg)

    }

    const handlePushMessage = useCallback((msg: MessageContent) => {

        const msgLessThanFound: { value: MessageContent } = sortedSetMsgs.findGreatestLessThanOrEqual(msg)
        const msgGreaterThanFound: { value: MessageContent } = sortedSetMsgs.findLeastGreaterThan(msg)
        if (!msgLessThanFound && !msgGreaterThanFound) {
            pushNewBlankParagraph(msg)
        } else {
            const msgFound = msgLessThanFound ?? msgGreaterThanFound
            if (msgFound.value.uId === msg.uId) {
                pushMsgIntoParagraph(msg, msgFound.value.paragraph ?? {
                    msgContents: [],
                    convId: 0,
                    uMsgTimeFmt: '',
                    uMsgTime: 0,
                    userId: 0
                })
            } else {
                pushNewBlankParagraph(msg)
            }
        }


        /*
        if(msgLessThanFound.uId === msg.uId){
            pushMsgAfterIntoParagraph(msgLessThanFound)
        }else if(msgGreaterThanFound.uId === msg.uId){
            pushMsgBeforeIntoParagraph(msgLessThanFound)
        }else {

        }*/

        sortedSetMsgs.push(msg)
        setParagraphs([...paragraphs])

    }, [paragraphs])


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [paragraphs])

    useEffect(() => {
        const timeouts: number[] = []
        messages.forEach((msg, index) => {
            const timeout = setTimeout(args => {
                handlePushMessage(msg)
            }, 500 * index)
            timeouts.push(timeout)
        })
        return () => {
            timeouts.forEach(to => clearTimeout(to))
        }

    }, [])


    return (
        <div className={styles.container} style={isSideNavOpen ? {} : {}}>
            <Header/>
            <div className={styles.paragraphs}>
                {
                    paragraphs.map(paraItem => (
                        <div key={paraItem.uMsgTime} className={styles.paragraph}>
                            <div className={styles.authorAvatar}>
                                <ConvAvatar size={34} name={''} coverImg={paraItem.user?.avatar ?? ''}/>
                            </div>
                            <div className={styles.paragraphContent}>
                                {
                                    paraItem.msgContents.map((msgItem, msgIndex) => (
                                        <div key={msgItem.msgTime} className={styles.message}>
                                            {
                                                !msgIndex && (
                                                    <div className={styles.msgHeader}>
                                                        <div className={styles.msgHeaderAuthorName}>
                                                            {paraItem.user?.name ?? ''}
                                                        </div>
                                                        <div className={styles.msgHeaderAuthorRole}>
                                                            {paraItem.user?.role ?? ''}
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
                <div style={{height: 10, width: '100%'}}
                     ref={messagesEndRef}>
                </div>
            </div>
            <TextField onPushMessage={handlePushMessage}/>
        </div>
    )
}
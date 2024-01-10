'use client'

import {ConvAvatar} from '@/app/chat/convAvatar'
import styles from '@/app/chat/conversation/conversation.module.css'
import {Header} from '@/app/chat/conversation/header'
import {TextField} from '@/app/chat/conversation/textField'
import {useSideNav} from '@/app/chat/SideNavContext'
import {faker} from '@faker-js/faker'
import React, {RefObject, useCallback, useEffect, useRef, useState} from 'react'

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
        name: 'Alice Doe',
        role: 'Developer',
        uId: 1,
        avatar: '/assets/img/1bd4dd6069428f64473bd4e633b7c00b.png',
        status: 'Active'
    },
    {
        name: 'Jane Doe',
        role: 'Designer',
        uId: 2,
        avatar: '/assets/img/4f6dc3624a44fb5e01e406158e3d1b49.jpg',
        status: 'Inactive'
    },
    {
        name: 'Alice Smith',
        role: 'Manager',
        uId: 3,
        avatar: '/assets/img/34d0c3811e30299006dfa8f78b2cd446.png',
        status: 'Active'
    },
    {
        name: 'Bob Johnson',
        role: 'Tester',
        uId: 4,
        avatar: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        status: 'Active'
    }

]


const messages: MessageContent[] = [
    {
        content: 'Hey, how are you doing today?',
        msgTime: Date.now() - 100000,
        uId: 1,
        cId: 1
    }
]
const dateTimeFormater = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
})

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




        sortedSetMsgs.push(msg)
        setParagraphs([...paragraphs])

    }, [paragraphs])


    useEffect(() => {
        messagesEndRef.current?.parentElement?.scrollIntoView({behavior: 'smooth'})
        messagesEndRef.current?.classList.add('newMsg')
    }, [paragraphs])


    useEffect(() => {
        const timeouts: number[] = []
        Array.from({length: 1000}).forEach((msg, index) => {
            const timeout = setTimeout(args => {
                const date = faker.date.recent()
                handlePushMessage({
                    content: faker.lorem.sentence(),
                    msgTime: date.getTime(),
                    msgTimeFmt: dateTimeFormater.format(date),
                    uId: faker.number.int({min: 1, max: 4}),
                    cId: 1

                })
            }, 2000 * index)
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
                        <div key={paraItem.uMsgTime} className={styles.paragraph} >
                            <div className={styles.authorAvatar}>
                                <ConvAvatar size={34} name={''} coverImg={paraItem.user?.avatar ?? ''}/>
                            </div>
                            <div className={styles.paragraphContent}>
                                {
                                    paraItem.msgContents.map((msgItem, msgIndex) => (
                                        <div key={msgItem.msgTime} className={styles.message} {...{ref:messagesEndRef}}>
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
                {/*<div style={{height: 0, width: '100%'}}
                     ref={messagesEndRef}>
                </div>*/}
            </div>
            <TextField onPushMessage={handlePushMessage}/>
        </div>
    )
}
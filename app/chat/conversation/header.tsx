'use client'

import {ConvAvatar} from '@/app/chat/convAvatar'
import {ConvOptionBtn} from '@/app/chat/conversation/convOptionBtn'
import {ConvVideoCallBtn} from '@/app/chat/conversation/convVideoCallBtn'
import styles from '@/app/chat/conversation/conversation.module.css'
import {ConvDetails} from '@/app/chat/navigation/convDetails'
import {useSideNav} from '@/app/chat/SideNavContext'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useSession} from 'next-auth/react'
import React from 'react'

function NavToggleBtn() {
    const {isSideNavOpen, toggleSideNav} = useSideNav()

    return (
        <div className={styles.headerBtn} style={{float: 'left'}} onClick={event => toggleSideNav()}>
            <FontAwesomeIcon
                icon={faBars}
            />
        </div>
    )
}

export function Header() {

    const useSession1 = useSession()
    console.log(useSession1)

    const item = {
        id: '5',
        coverImg: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        name: 'Fullsnack Designers',
        lastMsgTimeFmt: '',
        lastMsgCnt: '7 Online, from 12 peoples',
        lastMsgCount: 0,
        send: false,
        status: 'offline'
    }
    return (
        <header className={styles.header}>
            <NavToggleBtn/>
            <ConvAvatar {...item}/>
            <ConvDetails item={item} style={{width: 'calc(100% - 208px)'}}/>
            <ConvOptionBtn/>
            <ConvVideoCallBtn/>
        </header>
    )
}
import styles from '@/app/chat/conversation/conversation.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'

export function ConvVideoCallBtn() {
    return (
        <div className={styles.headerBtn} onClick={() => {
        }}>
            <FontAwesomeIcon
                icon={faPhone}
            />
        </div>
    )
}
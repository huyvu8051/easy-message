'use client'

import styles from '@/app/chat/navigation/navigation.module.css'
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export function Header() {

    return (
        <header style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px) ',
            height: 'var(--toolbar-height)',
            left: 0,
            right: 0,
            lineHeight: 'var(--toolbar-height)',
            position: 'absolute',
            top: 0,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between'
        }}>

            <h1 style={{
                display: 'inline-block',
                fontWeight: 600,
                marginLeft: 8,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: 'calc(100% - 56px)'
            }}>
                Recent Chats
            </h1>
            <div className={styles.searchBtn}>
                <FontAwesomeIcon
                    icon={faSearch}
                />
            </div>
        </header>
    )
}
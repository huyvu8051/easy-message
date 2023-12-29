import styles from '@/app/ui/header.module.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const {searchBtn} = styles

export function Header() {
    return (
        <header style={{
            WebkitBackdropFilter: 'blur(20px)',
            backdropFilter: 'blur(20px) ',
            height: 'var(--toolbar-height)',
            left: 0,
            lineHeight: 'var(--toolbar-height)',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1
        }}>
            <h1 style={{
                display: 'inline-block',
                fontWeight: 600,
                marginLeft: 8
            }}>
                Recent Chats
            </h1>
            <div className={searchBtn}>
                <FontAwesomeIcon
                    icon={faSearch}
                />
            </div>
        </header>
    )
}
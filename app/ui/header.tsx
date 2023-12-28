import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Header() {
    return (
        <header style={{
            backdropFilter: 'blur(20px) ',
            height: 'var(--toolbar-height)',
            lineHeight: 'var(--toolbar-height)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex:1
        }}>
            <h1 style={{
                display: 'inline-block',
                fontWeight: 600,
                marginLeft: 8
            }}>
                Recent Chats
            </h1>
            <div style={{
                display: 'inline-block',
                float: 'right',
                paddingLeft: 8,
                paddingRight: 8
            }}>
                <FontAwesomeIcon
                    icon={faSearch}
                />
            </div>
        </header>
    )
}
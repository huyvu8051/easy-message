import styles from '@/app/ui/styles.module.css'
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type Conversation = {
    id: string,
    lastMsgCnt: string,
    coverImg: string,
    name: string,
    lastMsgCount: number,
    lastMsgTimeFmt: string,
    send: boolean,
    status: string
}

const conversations: Conversation[] = [
    {
        id: '1',
        coverImg: '/assets/img/conversation-cover.png',
        name: 'Darlene Steward',
        lastMsgTimeFmt: '18:31',
        lastMsgCnt: 'Pls take a look at the images.',
        lastMsgCount: 5,
        send: false,
        status: 'busy'
    },
    {
        id: '2',
        coverImg: '/assets/img/4f6dc3624a44fb5e01e406158e3d1b49.jpg',
        name: 'Fullsnack Designers',
        lastMsgTimeFmt: '16:04',
        lastMsgCnt: 'Hello guys, we have discussed about ...',
        lastMsgCount: 0,
        send: false,
        status: 'none'
    }, {
        id: '3',
        coverImg: '/assets/img/1bd4dd6069428f64473bd4e633b7c00b.png',
        name: 'Lee Williamson',
        lastMsgTimeFmt: '06:12',
        lastMsgCnt: 'Yes, that’s gonna work, hopefully. ',
        lastMsgCount: 0,
        send: false,
        status: 'online'
    }, {
        id: '4',
        coverImg: '/assets/img/34d0c3811e30299006dfa8f78b2cd446.png',
        name: 'Ronald Mccoy',
        lastMsgTimeFmt: 'Yesterday',
        lastMsgCnt: 'Thanks dude 😉',
        lastMsgCount: 0,
        send: true,
        status: 'offline'
    }, {
        id: '5',
        coverImg: '/assets/img/2977aa404ccb3e9ed56890aa3fee11c9.png',
        name: 'Albert Bell',
        lastMsgTimeFmt: 'Yesterday',
        lastMsgCnt: 'I‘m happy this anime has such grea...',
        lastMsgCount: 0,
        send: false,
        status: 'offline'
    }]


export function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                {conversations.map((e: Conversation) => (
                    <li key={e.id}>
                        <div className={styles['conv-cover']}
                             style={{backgroundImage: `url(${e.coverImg})`, backgroundSize: '48px 48px '}}>
                            {/*DS*/}
                            <div className={`${styles['status-circle']} `}/>
                        </div>
                        <div className={styles['conv-details']}>
                            <div className={styles['conv-upper']}>
                                <p className={styles['conv-name']}>{e.name}</p>
                                <p className={styles['last-msg-time']}>{e.lastMsgTimeFmt}</p>
                            </div>
                            <div className={styles['conv-lower']}>
                                <p className={styles['last-msg-content']}>
                                    {e.send && <FontAwesomeIcon className={styles['icon-send']}
                                                                icon={faCheckDouble}/>} {e.lastMsgCnt}</p>
                                {e.lastMsgCount > 0 && <p className={styles['last-msg-count']}>{e.lastMsgCount}</p>}
                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
import styles from '@/app/chat/conversation/conversation.module.css'
import React, {FormEvent, KeyboardEvent, useRef} from 'react'

export function TextField({onPushMessage}: { onPushMessage?: Function }) {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        // handle form submission here
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            console.log('submit ', inputRef.current?.value)
            inputRef.current ? inputRef.current.value = '' : null

            if (onPushMessage) {
                onPushMessage({
                    text: inputRef.current?.value
                })
            }

        }
    }

    return (
        <form onSubmit={handleSubmit} /*style={{paddingTop: 8}}*/>
            <input
                ref={inputRef}
                className={styles.textInput}
                type="text"
                placeholder="Write a message..."
                onKeyDown={handleKeyDown}
            />
        </form>
    )
}

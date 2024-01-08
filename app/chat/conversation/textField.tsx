import {MessageContent} from '@/app/chat/conversation/conversation'
import styles from '@/app/chat/conversation/conversation.module.css'
import React, {FormEvent, KeyboardEvent, useRef} from 'react'

export function TextField({onPushMessage}: { onPushMessage?: (messageContent: MessageContent) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        // handle form submission here
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()


            if (onPushMessage) {
                onPushMessage({
                    msgTime: new Date().getTime(),
                    content: inputRef.current?.value ?? '',
                    msgTimeFmt: '',
                    uId: 1
                })
            }

            inputRef.current ? inputRef.current.value = '' : null

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

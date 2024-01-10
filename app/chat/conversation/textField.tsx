import {MessageContent} from '@/app/chat/conversation/conversation'
import styles from '@/app/chat/conversation/conversation.module.css'
import {faker} from '@faker-js/faker'
import React, {FormEvent, KeyboardEvent, useEffect, useRef} from 'react'

const dateTimeFormater = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
})

export function TextField({onPushMessage}: { onPushMessage?: (messageContent: MessageContent) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        // handle form submission here
    }


    const getRandomIdleTime = () => Math.floor(Math.random() * (5000 - 5000 + 1) + 500);


    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            const date = faker.date.recent()

            if (onPushMessage) {
                onPushMessage({
                    content: inputRef.current?.value ?? '',
                    msgTime: date.getTime(),
                    msgTimeFmt: dateTimeFormater.format(date),
                    uId: faker.number.int({min: 1, max: 4}),
                    cId: 1

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

import {Navigation} from '@/app/ui/navigation'
import React from 'react'

function Message() {
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
        }}>
            Select a conversation
        </div>
    )
}

export default function Chat() {

    return (
        <>
            <Navigation/>
            {/*<Message/>*/}
        </>
    )
}
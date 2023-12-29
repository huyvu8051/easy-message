import {Navigation} from '@/app/ui/navigation'
import React from 'react'

function Message() {
    return (
        <div style={{
            textAlign: 'center',
            justifyContent: 'center',
            height: '100%',
            flex: 1,
            // padding: '8px 8px 0 8px'

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
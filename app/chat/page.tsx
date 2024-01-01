import {Navigation} from '@/app/chat/navigation/navigation'
import React from 'react'
import {Conversation} from "@/app/chat/conversation/conversation";

export default function Chat() {

    return (
        <main>
            <Navigation/>
            <Conversation/>
        </main>
    )
}
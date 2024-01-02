import {Navigation} from '@/app/chat/navigation/navigation'
import React from 'react'
import {Conversation} from "@/app/chat/conversation/conversation";
import {SideNavProvider} from '@/app/chat/SideNavContext'

export default function Chat() {

    return (
        <SideNavProvider>
            <main>
                <Navigation/>
                <Conversation/>
            </main>
        </SideNavProvider>
    )
}
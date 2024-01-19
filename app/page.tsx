'use client'

import {signIn} from 'next-auth/react'

export default function Page() {

    return (<div onClick={() => signIn(undefined, {callbackUrl: '/chat'}).then(r => {
    }).catch(() => {
    })}>redirect to signing page</div>)
}
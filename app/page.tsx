'use client'

import {useRouter} from 'next/navigation'

export default function Page(){
    const useRouter1 = useRouter()
    useRouter1.push('/auth')
    return (<div>redirect to signing page</div>)
}
'use client'

import {SessionProvider} from 'next-auth/react'
import { useSession, signIn, signOut } from "next-auth/react"
export default function Page({

                             }) {
    return (
        <SessionProvider>
            <main>
                <header>
                    <h1>Easy Message</h1>
                    <h2>F*cking Easy Message app with high performance and scalable storage.</h2>

                </header>
                <section>
                    <div>Signing or Register</div>
                    <div className={'signingType'}>
                        <div className="google">

                        </div>
                        <div className="github" onClick={()=>signIn()}>
                            github
                        </div>
                        <div className="gitlab">

                        </div>
                        <div className="facebook">

                        </div>
                        <div className="apple">

                        </div>
                        <div className="microsoft">

                        </div>

                    </div>
                </section>
            </main>
        </SessionProvider>

    )
}
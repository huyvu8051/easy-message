import {insertUser, selectUserByEmail} from '@/app/lib/user'
import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import DiscordProvider from 'next-auth/providers/discord'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
import Google from 'next-auth/providers/google'

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import {Adapter} from "next-auth/adapters";

const prisma = new PrismaClient()

const handler = NextAuth({
    providers: [

        AppleProvider({
            clientId: process.env.APPLE_ID ?? '',
            clientSecret: process.env.APPLE_SECRET ?? ''
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID ?? '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? ''
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        }),
        GitlabProvider({
            clientId: process.env.GITLAB_CLIENT_ID ?? '',
            clientSecret: process.env.GITLAB_CLIENT_SECRET ?? ''
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })


    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    pages: {},
    callbacks: {
        async signIn(params) {
            console.log('signIn', params)

            if (!params.profile?.email) {
                console.log('Your signin account don\'t have any email, please try again!')
                return false
            }
            /*else if ((params.profile)['verified']) {
                console.log('Your email must be verification, please try again!')
                return false
            }*/


            let user = await selectUserByEmail(params.profile?.email ?? '')
            if (!user) {
                user = await insertUser({
                    email: params.profile?.email ?? '',
                    name: params.profile?.name ?? '',
                    image: params.profile?.image ?? ''
                })
            }

            console.log(user)

            return true
        },
        async redirect(params) {
            console.log('redirect', params)
            return params.url
        },
        async session(params) {
            console.log('session', params)
            return params.session
        },
        async jwt(params) {
            console.log('jwt', params)
            return params.token
        }
    }

})

export {handler as GET, handler as POST}
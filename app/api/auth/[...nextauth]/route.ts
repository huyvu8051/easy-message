import {selectUserByEmail} from '@/app/lib/user'

import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'
import NextAuth from 'next-auth'
import {Adapter} from 'next-auth/adapters'
import AppleProvider from 'next-auth/providers/apple'
import DiscordProvider from 'next-auth/providers/discord'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
import Google from 'next-auth/providers/google'

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
            return true
        },
        async redirect(params) {
            console.log('redirect', params)
            return params.url
        },
        async session(params) {
            console.log('session', params)
            /*const userData = await selectUserByEmail(params.session.user?.email ?? '')

            // return params.session
            params.session.user = {...params.session.user, ...userData}*/
            return params.session
        },
        async jwt(params) {
            console.log('jwt', params)
            return params.token
        }
    }

})

export {handler as GET, handler as POST}
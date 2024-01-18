import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import DiscordProvider from 'next-auth/providers/discord'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
import Google from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [

        AppleProvider({
            clientId: process.env.APPLE_ID ?? '',
            clientSecret: process.env.APPLE_SECRET ?? ''
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID ?? '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',

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
    pages:{

    },

})

export {handler as GET, handler as POST}
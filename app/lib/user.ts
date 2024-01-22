import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export async function selectUserByEmail(email: string) {

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    return user
}

export async function insertUser(data: {email: string, name: string, image: string}){
    const user = await prisma.user.create({
        data
    })

    return user
}
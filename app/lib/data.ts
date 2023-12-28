import {sql} from '@vercel/postgres'

class Customer {
    id: string
    name: string
    email: string
    image_url: string

    constructor() {
        this.id = ''
        this.name = ''
        this.email = ''
        this.image_url = ''
    }
}

export async function fetchRevenue() {
    try {
        // We artificially delay a response for demo purposes.
        // Don't do this in production :)
        console.log('Fetching revenue data...')
        // await new Promise((resolve) => setTimeout(resolve, 3000))

        const data = await sql<Customer>`select *
                                         from customers`

        console.log('Data fetch completed after 3 seconds.')

        return data.rows
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch revenue data.')
    }
}
import {NextApiRequest, NextApiResponse} from 'next'
import {Server, } from 'socket.io'

const io = new Server(3000)
io.attach(3000)
console.log(io)
// Create a socket.io server
const ioHandler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log('socket ', req, res)

}

export {ioHandler as GET, ioHandler as POST}

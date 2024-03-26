import {NextApiRequest} from "next";
import {NextApiResponseServerIo} from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIo) {
    res.socket.server.io.emit('notification', {message: 'dick'})
}
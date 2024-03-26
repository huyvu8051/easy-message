import {Server} from "socket.io";
import {Member} from ".prisma/client";


export type ServerWithMembersWithProfiles = Server & {
    members: Member & {
        profile: any
    }[]


}
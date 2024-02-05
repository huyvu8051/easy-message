import { useEffect } from "react";
import { Member, Message, Profile } from "@prisma/client";

import { useSocket } from "@/components/providers/socket-provider";
import {PrismaClient} from '.prisma/client'

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
}

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile: Profile;
    }
}

export const useChatSocket = ({
                                  addKey,
                                  updateKey,
                                  queryKey
                              }: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClient = new PrismaClient()

    useEffect(() => {
        if (!socket) {
            return;
        }

        socket.on(updateKey, (message: MessageWithMemberWithProfile) => {

        });

        socket.on(addKey, (message: MessageWithMemberWithProfile) => {
            
        });

        return () => {
            socket.off(addKey);
            socket.off(updateKey);
        }
    }, [queryClient, addKey, queryKey, socket, updateKey]);
}
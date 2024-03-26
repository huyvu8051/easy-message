import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Member, Message } from "@prisma/client";

import { useSocket } from "@/components/providers/socket-provider";

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
}

type MessageWithMemberWithProfile = Message & {
    member: Member & {
    }
}

export const useChatSocket = ({
                                  addKey,
                                  updateKey,
                                  queryKey
                              }: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClient = useQueryClient();

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
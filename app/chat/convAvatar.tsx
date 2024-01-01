import React from "react";
import {ConversationType} from "@/app/chat/conversation.type";
import styles from '@/app/chat/convAvatar.module.css'

const {convCover, statusCircle, convCoverImg} = styles
export function ConvAvatar({item}: { item: ConversationType }) {
    return <div className={convCover}>
        {/*DS*/}
        <img src={item.coverImg} alt={`${item.name} cover image.`} className={convCoverImg}/>
        <div className={statusCircle}/>
    </div>;
}
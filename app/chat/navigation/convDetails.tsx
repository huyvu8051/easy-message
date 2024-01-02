import {ConversationType} from "@/app/chat/conversation.type";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import React, {CSSProperties} from "react";
import style from "@/app/chat/navigation/navigation.module.css";


const {
    navigation,
    convDetails,
    convUpper,
    convName,
    lastMsgTime,
    convLower,
    lastMsgContent,
    iconSend,
    lastMsgCount
}
    = style

export function ConvDetails(props: { item: ConversationType, style?: CSSProperties}) {
    return (
        <div style={{...props.style}} className={convDetails}>
            <div className={convUpper}>
                <p className={convName}>{props.item.name}</p>
                <p className={lastMsgTime}>{props.item.lastMsgTimeFmt}</p>
            </div>
            <div className={convLower}>
                <p className={lastMsgContent}>
                    {props.item.send && <FontAwesomeIcon className={iconSend}
                                                         icon={faCheckDouble}/>} {props.item.lastMsgCnt}</p>
                {props.item.lastMsgCount > 0 && <p className={lastMsgCount}>{props.item.lastMsgCount}</p>}
            </div>
        </div>
    )
}
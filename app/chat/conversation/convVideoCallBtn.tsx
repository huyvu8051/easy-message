import styles from "@/app/chat/conversation/conversation.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {getSession, useSession} from 'next-auth/react'
import React from "react";

export function ConvVideoCallBtn() {
    const session = getSession()
    // useSession1.then(resp=>console.log(resp))

    return (
        <div className={styles.headerBtn} onClick={()=>{}}>
            <FontAwesomeIcon
                icon={faPhone}
            />
        </div>
    );
}
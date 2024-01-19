import styles from "@/app/chat/conversation/conversation.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {signOut} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import React from "react";

export function ConvOptionBtn() {
    const router = useRouter()
    return (
        <div className={styles.headerBtn} onClick={()=>signOut({callbackUrl: '/api/auth/signin'})}>
            <FontAwesomeIcon
                icon={faEllipsisV}
            />
        </div>
    );
}
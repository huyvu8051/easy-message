import styles from "@/app/chat/conversation/header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ConvVideoCallBtn() {
    return (
        <div className={styles.headerBtn}>
            <FontAwesomeIcon
                icon={faPhone}
            />
        </div>
    );
}
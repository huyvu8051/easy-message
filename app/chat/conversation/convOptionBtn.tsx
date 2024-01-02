import styles from "@/app/chat/conversation/header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ConvOptionBtn() {
    return (
        <div className={styles.headerBtn}>
            <FontAwesomeIcon
                icon={faEllipsisV}
            />
        </div>
    );
}
import React from "react";
import styles from '@/app/chat/convAvatar.module.css'

const {convCover, statusCircle, convCoverImg} = styles

export function ConvAvatar({name, coverImg, size = '48px'}: {
    name: string,
    coverImg: string,
    size?: string | number
}) {
    return <div className={convCover} style={{width: size, height: size}}>
        {/*DS*/}
        <img src={coverImg} alt={`${name} cover image.`} className={convCoverImg}/>
        <div className={statusCircle}/>
    </div>;
}
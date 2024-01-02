import styles from '@/app/chat/convAvatar.module.css'
import React from 'react'

const {convCover, statusCircle, convCoverImg} = styles

export function ConvAvatar({name, coverImg, size = '48px', hidden = false}: {
    name: string,
    coverImg: string,
    size?: string | number,
    hidden?: boolean
}) {
    return <div className={convCover} style={{width: size, height: size, ...(hidden && {visibility: 'hidden'})}}>
        {/*DS*/}
        <img src={coverImg} alt={`${name} cover image.`} className={convCoverImg}/>
        <div className={statusCircle}/>
    </div>
}
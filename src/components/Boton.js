import { Button } from 'antd'
import React from 'react'

export const Boton = ({backgroundColor, color, text,onClick}) => {
    return (
        <Button style={{backgroundColor:backgroundColor, color:color, borderRadius:'10px', fontWeight:'bold'}} onClick={onClick}>{text}</Button>
    )
}

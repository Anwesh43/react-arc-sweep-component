import React from 'react'

const buttonStyle = (w, h) => {
    const position = 'absolute'
    const top = `${0.1 * h}px`
    const left = `${0.45 * w}px`
    return {position, top, left}
}

const Button = ({w, h, onClick}) => {
    return <button onClick = {onClick} style = {buttonStyle(w, h)}>Start</button>
}
export default Button

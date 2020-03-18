import React from 'react'
import {sinify, divideScale} from './utils'

const sweepStyle = (i, scale, w, h) => {
    const position = 'absolute'
    const size = Math.min(w, h) / 3
    const left = `${w / 2 - size / 2}px`
    const top = `${h / 2 - size / 2}px`
    const width = `${size}px`
    const height = `${size}px`
    const background = '#673AB7'
    const WebkitTransform = `rotate(${90 * i - 90 + 90 * divideScale(scale, i, 4)}deg)`
    const clip = `rect(${size}px ${size}px ${size / 2}px ${size / 2}px)`
    return {width, height, background, position, left, top, WebkitTransform, clip}
}

const SweepArcPart = ({i, scale, w, h}) => {
    const sf = sinify(scale)
    return <div style = {sweepStyle(i, sf, w, h)}></div>
}

export default SweepArcPart

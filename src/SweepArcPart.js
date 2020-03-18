import React from 'react'
import {sinify, divideScale} from './utils'

const rectI = (size, sc) => {
    const tr = size / 2
    const br = tr + (size / 2) * sc
    const lr = size / 2
    const rr = lr + size * 0.5 * sc
    return `rect(${tr}px ${rr}px ${br}px ${lr}px)`
}
const sweepParentStyle = (scale, i, w, h) => {
    const position = 'absolute'
    const sc = divideScale(scale, i, 4)
    const size = Math.min(w, h) / 3
    const left = `${w / 2 - size / 2 * sc}px`
    const top = `${h / 2 - size / 2 * sc}px`
    const width = `${size * sc}px`
    const height = `${size * sc}px`
    const background = '#673AB7'
    const tr = size - size * (i % 2)
    const clip = rectI(size, sc)
    const borderRadius = '50%'
    const WebkitTransform = `rotate(${-90 + 90 * (i + 1) * sc}deg)`
    return {width, height, position, left, top, clip, borderRadius, WebkitTransform, background}
}

const sweepStyle = (scale, i, w, h) => {
    var {width, height, borderRadius, clip} = sweepParentStyle(i, w, h)
    width = `${parseInt(width)/ 2}px`
    const sc = divideScale(scale, i, 4)

    height = `${parseInt(height) * 0.5}px`
    const background = '#673AB7'
    const WebkitTransform = `rotate(${-90 + 90 * sc}deg)`
    return {width, height, background, WebkitTransform, clip}
}



const SweepArcPart = ({i, sf, w, h}) => {
    return (<div style = {sweepParentStyle(sf, i, w, h)}>
          </div>)
}

export default SweepArcPart

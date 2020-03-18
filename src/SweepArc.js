import React from 'react'
import SweepArcPart from './SweepArcPart'

const SweepArc = ({scale, w, h} => {
    return (<div>
                {[0, 1, 2, 3].map(i => <SweepArcPart i = {i} w = {w} h = {h} scale = {scale}/>)}
            </div>)
})

export default SweepArc

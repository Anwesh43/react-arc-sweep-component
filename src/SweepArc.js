import React from 'react'
import SweepArcPart from './SweepArcPart'

const SweepArc = ({scale, w, h} => {
    return (<React.Fragment>
                {[0, 1, 2, 3].map(i => <SweepArcPart i = {i} w = {w} h = {h} scale = {scale}/>)}
            </React.Fragment>)
})

export default SweepArc

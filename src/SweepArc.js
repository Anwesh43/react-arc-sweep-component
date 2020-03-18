import React from 'react'
import SweepArcPart from './SweepArcPart'
import {sinify} from './utils'

const getSweepArcParts = (w, h, n, sf) => {
    const sweepArcParts = []
    var limit = Math.floor(n * sf)
    for (var i = 0; i < n; i++) {
        sweepArcParts.push(<SweepArcPart i = {i} w = {w} h = {h} sf = {sf}/>)
    }
    return sweepArcParts
}
const SweepArc = ({scale, w, h}) => {
    const sf = sinify(scale)
    return (<React.Fragment>
                {getSweepArcParts(w, h, 4, sf)}
            </React.Fragment>)
}

export default SweepArc

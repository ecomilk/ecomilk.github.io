import React from 'react'

import './Line.css'

const Line = ({color, width, height = 4, x1 = 0, x2 = 0, y1 = 0, y2 = 0}) => {
    const style = {
        stroke: color,
        strokeWidth: 4
    };

    return (
        <div>
            <svg height={height} width={width}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
            </svg>
        </div>
    )
};

export default Line
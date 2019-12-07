import React from 'react'

import './Line.css'

const Line = ({color = 'var(--color-yellow)', width = '100%', height = 4, x1 = 0, x2 = '100%', y1 = 0, y2 = 0}) => {
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
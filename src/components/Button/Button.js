import React from 'react'

import './Button.css'

const Button = ({label, onClick}) => {
    return (
        <div>
            <button className="button" onClick={(event) => onClick(event)}>
            <span>
                {label}
            </span>
            </button>
        </div>
    )
};

export default Button
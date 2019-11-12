import React from 'react'

import './Button.css'

const Button = ({label, onClick}) => {
    return (
        <button className="button"
                onClick={(event) => onClick(event)}>{label}</button>
    )
};

export default Button
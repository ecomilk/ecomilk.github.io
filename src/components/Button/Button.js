import React from 'react'

import './Button.css'

const Button = (props) => {
    const {label, href, onClick = null} = props;
    return (
        <div className='button-container'>
            <a
                href={href}
                className="button" onClick={onClick}
            >{label}</a>
        </div>
    )
};

export default Button
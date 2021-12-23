import React from 'react';
import "./style.scss"

const Anchor = ({title, size, className, ...props}) => {
    return <a className={`${className} ${size} `} {...props} >{title}</a>
}

export default Anchor

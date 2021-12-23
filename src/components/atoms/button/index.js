import React from 'react';
import "./style.scss"

const Button = ({title, className, ...props}) => {
    return <button className={className} {...props}>{title}</button>
}

export default Button

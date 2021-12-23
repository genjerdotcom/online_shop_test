import React from 'react';
import "./style.scss";

const Images = ({title, className,...props}) => {
    return <img className={className} alt={title} {...props} />
}

export default Images

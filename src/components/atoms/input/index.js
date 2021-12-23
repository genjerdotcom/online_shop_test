import React from 'react';

import "./style.scss";

const Input = ({className, ...props}) => {
    return <input className={[className].join(' ')} {...props} />
}

export default Input

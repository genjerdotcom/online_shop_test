import React from 'react';
import "./style.scss"

const Text = ({tag: Tag = 'p',size,  className, ...props}) => {
    return <Tag className={[className, size].join(" ")} {...props} />
}

export default Text

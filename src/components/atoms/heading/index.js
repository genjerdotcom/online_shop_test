import React from 'react';
import "./style.scss"

const Heading = ({tag: Tag , visualLevel, className, ...props}) => {
    return <Tag className={[`h h${visualLevel}`, className].join(' ')} {...props} />
}

export default Heading

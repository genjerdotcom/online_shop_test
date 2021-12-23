import React from 'react'
import "./style.scss"
import { LogoImg } from '../../../assets';
import "./style.scss"

const Logo = ({className, ...props}) => {
    return <img className={className} src={LogoImg} alt="logo header" {...props} />
}

export default Logo

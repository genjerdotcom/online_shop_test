import React from 'react';
import { useHistory } from 'react-router';
import NavMenu from '../../molecules/navMenu';
import Logo from '../../atoms/logo';
import "./style.scss";

const Header = () => {
    const history = useHistory();

    return (
        <div className="header">
            <div className="container">
                <Logo className="logo" onClick={()=>history.push("/")}/>
                <NavMenu />
            </div>
        </div>
    )
}

export default Header

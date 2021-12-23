import React from 'react';
import { SocialMedia } from '../../molecules';
import { Text } from '../../atoms';
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <SocialMedia />
                <Text size="s">Created By GinanjarDP</Text>
            </div>
        </div>
    )
}

export default Footer

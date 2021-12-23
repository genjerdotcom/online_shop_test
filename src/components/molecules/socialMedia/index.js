import React from 'react';
import { Images } from '../../atoms';
import { ICLinkedin, ICFacebook, ICInstagram } from '../../../assets';
import "./style.scss"; 

let socialUrl = {
    linkedin: 'https://www.linkedin.com/in/ginanjar-putranto-0416a913b/'
}

const SocialMedia = () => {
    return (
        <ul className="social-media">
            <li className="social-media--item" 
                onClick={()=> window.open(socialUrl.linkedin, "_blank")}
            >
                <Images src={ICLinkedin} title="Linkedin" className="icon-item"/>
            </li>
            <li className="social-media--item"
                onClick={()=> window.open(socialUrl.linkedin, "_blank")}
            >
                <Images src={ICFacebook} title="Facebook" className="icon-item"/>
            </li>
            <li className="social-media--item"
                onClick={()=> window.open(socialUrl.linkedin, "_blank")}
            >
                <Images src={ICInstagram} title="Instagram" className="icon-item" />
            </li>
        </ul>
    )
}

export default SocialMedia

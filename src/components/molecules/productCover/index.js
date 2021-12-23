import React from 'react';
import { Images } from '../../atoms';
import { IMGTextGrey } from '../../../assets';

import "./style.scss";

const ProductCover = ({...props}) => {
    return (
        <div className="movies--item--cover">
            <Images 
                className={[props.className].join(" ")} 
                onError={(e)=>{e.target.onerror = null; e.target.src=IMGTextGrey}} 
                src={props.cover}
                alt={props.title}
            />
        </div>
    )
}

export default ProductCover

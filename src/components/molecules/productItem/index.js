import React from 'react';
import { Text, Anchor, Heading, Images, Button } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { IMGTextGrey } from '../../../assets';
import { Modal, useModal } from '..';

import "./style.scss";

const ProductItem = (props) => {
    const history = useHistory();
    const { isShowing, toggle } = useModal(false);
    
    const handleDetail = () => {
        history.push(`/products/${props.id}`)
    }

    return (
        <li className="products--item">
            <div className="products--item--cover">
                <Images 
                    onClick={toggle} 
                    onError={(e)=>{e.target.onerror = null; e.target.src=IMGTextGrey}} 
                    className="img-responsive" 
                    src={props.image}
                />
                <Button className="btn-cart" title="Add To Cart"/>
            </div>
            <div className="wrapper--item--text">
                <Heading className="cursor-pointer text-left text-category--item" tag="h3" visualLevel="5" onClick={handleDetail}>
                    <Anchor title={props.category} className="link" size="m"  />
                </Heading>
                <Heading className="cursor-pointer text-left text-title--item" tag="h3" visualLevel="3" onClick={handleDetail}>
                    <Anchor title={props.title} className="link" size="m"  />
                </Heading>
                <Text className="text-price--item text-left" size="s">
                    ${props.price}
                </Text> 
            </div>

            <Modal 
                isShowing={isShowing}
                hide={toggle}
                children={<Images 
                    onError={(e)=>{e.target.onerror = null; e.target.src=IMGTextGrey}} 
                    className="img-responsive" 
                    src={props.image}
                />}
            />
            
        </li>
    )
}

export default ProductItem

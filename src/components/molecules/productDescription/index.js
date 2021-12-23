import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text, Heading, Anchor, Button } from '../../atoms';

import "./style.scss"

const ProductDescription = ({...props}) => {
    const {
        title,
        price,
        description,
        category
    } = props
    const history = useHistory();

    return (
        <React.Fragment>
            <Heading className="cursor-pointer text-left bold" tag="h3" visualLevel="5">
                {title}
            </Heading>
            <Text className="text-movie--item text-left detail-list" size="m">
                <Anchor title={category} className="category" size="m" />
            </Text> 
            <Text className="text-movie--item text-left detail-list" size="s">
                $<Anchor title={price} className="link" size="m"  />
            </Text> 
            <Text className="text-movie--item text-left detail-list" size="s">
                <Anchor title={description} className="link" size="s"  />
            </Text>  
            <Button className="btn-cart" title="Add To Cart"/>
            <Button title="Back" className="link back-link btn-back" size="m" onClick={()=>history.push("/")} />
        </React.Fragment>
    )
}

export default ProductDescription

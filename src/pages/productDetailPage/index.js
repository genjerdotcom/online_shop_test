import React, {useEffect} from 'react';
import { ProductDetailTemplate } from '../../components';
import { withRouter } from 'react-router-dom';
import { getProductDetail } from '../../modules/redux/actions/productDetailActions';
import { useDispatch } from 'react-redux';

const ProductDetailPage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        window.scrollTo(0, 0);
        dispatch(getProductDetail(id));  
    }, [dispatch, props])

    return (
        <ProductDetailTemplate />
    )
}

export default withRouter(ProductDetailPage)

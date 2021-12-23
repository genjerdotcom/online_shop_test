import React from 'react';
import { ProductCover } from '../../molecules';
import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ProductDescription } from '../..';

import "./style.scss";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetail = () => {
    const { productDetail, loading } = useSelector(state => state.productDetailReducer);

    const loaderCover = () => {
        return <SkeletonTheme>
            <Skeleton height={280}/>
        </SkeletonTheme>
    }

    const loaderDescription = () => {
        return <SkeletonTheme>
            <Skeleton height={40}/>
            <Skeleton style={{marginTop:15}} height={20}/>
            <Skeleton style={{marginTop:15}} height={20}/>
            <Skeleton style={{marginTop:15}} height={20}/>
            <Skeleton style={{marginTop:15}} height={20}/>
            <Skeleton style={{marginTop:15}} height={20}/>
        </SkeletonTheme>
    }

    return (
        <div className="moviesDetailContainer">
            <ul className="movies-detail">
                <li className="movies--item">
                    { loading ? loaderCover() : <ProductCover cover={productDetail.image} className="img-cover" /> }
                </li>
                <li>
                    { loading ? loaderDescription() : <ProductDescription {...productDetail}/> }
                </li>
            </ul>
        </div>
    )
}

export default ProductDetail

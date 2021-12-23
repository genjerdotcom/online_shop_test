import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ProductItem } from '../../molecules';
import { Text } from '../../atoms';
import { useSelector } from 'react-redux';

import "./style.scss";
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const { productsList, loading, error } = useSelector(state => state.productsReducer);

    const loader = (count) => {
        let skleton = [];
        for (let i = 0; i < count; i++) {
            skleton.push(
                <li className="products--items" key={i} >
                    <SkeletonTheme>
                        <Skeleton height={280}/>
                        <Skeleton width={`100%`} height={45} style={{marginTop:"10px"}}/>
                        <Skeleton width={`100%`} height={45} style={{marginTop:"10px"}}/>
                    </SkeletonTheme>
                </li>
            );
        }
        return skleton
    }

    return (
        <div className="productsContainer">
            
            { 
               !loading && error 
                ?   <Text className="text-center padding-20">No Data record</Text> 
                :   <ul className="products">
                        { 
                            productsList.data.map((row,i) => {
                                return <ProductItem key={row.id} {...row} /> 
                            })
                        }
                        {loading ? loader(10) : ""}
                    </ul>
            }

            {
                !loading && !error && productsList.page.currentPage >= productsList.page.totalPage 
                ? <Text className="text-center padding-20">No more</Text> 
                : ""
            }
        </div>
    )
}

export default Products


import { GetProducts } from '../../api/axios';
import { 
    GET_PRODUCTS_SUCCESS,
    REQUEST_PRODUCTS,
    GET_PRODUCTS_ERROR,
    SET_KEYWORD_PRODUCTS
} from '../types';

const setKeyword = (keyword) => (dispatch) => {
    dispatch({
        type: SET_KEYWORD_PRODUCTS, 
        keyword: keyword
    })
}

const getProducts = (page) => async (dispatch) => {
    try{

        let totalResults,
            totalPage = 1,
            results = [],
            response = {}

        await dispatch({ type: REQUEST_PRODUCTS })
        await new Promise(resolve => setTimeout(resolve, 2000))

        response = await GetProducts(page);

        if(response.data.length > 0){
            totalResults = response.data.totalResults;
            results = response.data;
        }
        
        await dispatch({
            type: GET_PRODUCTS_SUCCESS,
            error: false,
            loading: false,
            payload: {
                data: results,
                page: {
                    currentPage: page, 
                    totalPage: totalPage
                },
                totalResults: totalResults
            }
        })

    }catch(error) {
        console.log(error)
        await dispatch({
            type: GET_PRODUCTS_ERROR,
            error: true
        })
    }
}

export {
    getProducts,
    setKeyword
}
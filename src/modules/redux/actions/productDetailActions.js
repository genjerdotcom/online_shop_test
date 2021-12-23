
import { DetailProduct } from '../../api/axios';
import { 
    GET_PRODUCT_DETAIL,
    REQUEST_PRODUCT_DETAIL,
    RESET_PRODUCTS
} from '../types';

const getProductDetail = (id) => async (dispatch) => {
    try{
        let results = []
        
        await dispatch({ type: REQUEST_PRODUCT_DETAIL })
        await dispatch({ type: RESET_PRODUCTS})
        await new Promise(resolve => setTimeout(resolve, 2000))

        const response = await DetailProduct(id);

        if(response.data){
            results = response.data;
        }

        await dispatch({
            type: GET_PRODUCT_DETAIL,
            error: false,
            loading: false,
            payload: {
                data: results
            }
        })

    }catch(error) {
        console.log(error)
    }
}

export {
    getProductDetail
}
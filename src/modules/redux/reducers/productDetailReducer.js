import { 
    GET_PRODUCT_DETAIL,
    REQUEST_PRODUCT_DETAIL
} from '../types';

const initialState = {
    loading: true,
    error: false,
    productDetail: {}
}

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                loading: false,
                error: false,
                productDetail: action.payload.data
            }
        case REQUEST_PRODUCT_DETAIL:
            return {
                ...state,
                loading: true,
                error: false
            }
        default:
            return state;
    }
}

export default productDetailReducer
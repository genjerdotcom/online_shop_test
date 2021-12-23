import { 
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    REQUEST_PRODUCTS,
    SET_KEYWORD_PRODUCTS,
    RESET_PRODUCTS
} from '../types';

const initialState = {
    loading: true,
    error: false,
    keyword: '',
    productsList: {
        data: [],
        page: {
            currentPage: 1,
            totalPage: 1
        },
        totalResults: 0
    }
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                productsList: {
                    data: state.productsList.data.concat(action.payload.data),
                    page: action.payload.page,
                    totalResults: action.payload.totalResults ? action.payload.totalResults : state.productsList.totalResults
                }
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case REQUEST_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case SET_KEYWORD_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: false,
                productsList: {
                    data: [],
                    page: {
                        currentPage: 1,
                        totalPage: 0
                    },
                    totalResults:0
                }
            }
        case RESET_PRODUCTS: {
            return initialState;
            }
        default:
            return state;
    }
}

export default productsReducer
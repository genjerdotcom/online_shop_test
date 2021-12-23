import instance from "./instance";

const endpoint = (payload = {}) => {
    return {
        GET_PRODUCTS:`/products`,
        DETAIL_PRODUCT:`/products/${payload.id}`
    }
}

const GetProducts = async (page) => {
    try{
        return await instance.get(endpoint({page}).GET_PRODUCTS)
    }catch(error){
        console.log('error Get Product',error)
    }
}

const DetailProduct = async (id) => {
    try{
        return await instance.get(endpoint({id}).DETAIL_PRODUCT)
    }catch(error){
        console.log('error Get Detail Product',error)
    }
}

export {
    GetProducts,
    DetailProduct
}
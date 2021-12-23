import instance from "./instance";

const endpoint = () => {
    return {
        AUTH_LOGIN:`/auth/login`
    }
}

const AuthLogin = async (data) => {
    try{
        return await instance.post(endpoint().AUTH_LOGIN, data)
    }catch(error){
        console.log('error Auth Login',error)
    }
}

export {
    AuthLogin
}
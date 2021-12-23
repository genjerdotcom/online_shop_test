
import { AuthLogin } from '../../api/axios';
import { 
    LOGIN_REQUEST,
    RESET_PRODUCTS
} from '../types';

const LogoutAction = () => {
    localStorage.removeItem('user');
}

const LoginAction = (data) => async (dispatch) => {
    try{
        let results = {}
        console.log('data Login', data)
        await dispatch({ type: RESET_PRODUCTS})
        await new Promise(resolve => setTimeout(resolve, 2000))

        const response = await AuthLogin(data);

        if(response){
            console.log('response',response)
            results = response.data;
            localStorage.setItem('user', JSON.stringify(results));
            return await dispatch({
                type: LOGIN_REQUEST,
                error: false,
                inSession: true,
                payload: {
                    data: results
                }
            })
        }
        console.log('no response')
        return await dispatch({
            type: LOGIN_REQUEST,
            error: true,
            inSession: false,
            payload: {
                data: {
                    message: "Wrong credentials!"
                }
            }
        })
    }catch(error) {
        console.log(error)
    }
}

export {
    LoginAction,
    LogoutAction
}
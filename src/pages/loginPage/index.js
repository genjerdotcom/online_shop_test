import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoginTemplate } from '../../components';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const Lstorage = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        dispatch({ type: "RESET_PRODUCTS"})
    }, [dispatch])

    return (
        (Lstorage) 
        ? (<Redirect to="/" />)
        : <div>
            <LoginTemplate />
        </div>
    )
}

export default LoginPage

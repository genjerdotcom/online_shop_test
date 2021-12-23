import React from 'react';
import { withFormik } from "formik";
import * as Yup from "yup";
import { Heading } from '../..';
import { LoginAction } from '../../../modules/redux/actions/authActions';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import "./style.scss"

const LoginForm = (props) => {
    
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;

    const callback = useSelector(state => state.authReducer);
    const Lstorage = JSON.parse(localStorage.getItem('user'))

    return (
        (Lstorage) 
        ? (<Redirect to="/" />)
        : <form onSubmit={handleSubmit} className='form-login'>
            <Heading className="cursor-pointer text-left bold title-form-login" tag="h3" visualLevel="5">
                Please Login
            </Heading>
            { 
                (callback.error) ? 
                <div className='error-message'>
                    <ul>
                        <li>{callback.dataLogin.message}</li>
                    </ul>
                </div> 
                : '' 
            }
            <label htmlFor="username">Username</label>
            <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username && touched.username && "error"}
            />
            {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
            )}
            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
            )}
            <button type="submit" disabled={isSubmitting} className='btn-login'>
                Login
            </button>
        </form>
    );
}

const formikEnhancer = withFormik({
    mapPropsToValues: () => ({
        username: "",
        password: "",
    }),

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Required"),
        password: Yup.string().required("No password provided.")
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        setTimeout(() => {
          props.dispatch(LoginAction(values));
          setSubmitting(false);
        }, 1000);
    },
    displayName: 'LoginForm',
})(LoginForm);

export default connect()(formikEnhancer)

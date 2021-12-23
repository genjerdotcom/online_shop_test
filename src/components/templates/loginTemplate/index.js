import React from 'react';
import { Header, Footer, Login } from '../../organisms';
import "./style.scss";

const LoginTemplate = () => {
    return (
        <React.Fragment>
            <Header />
                <main className="login-wrapper">
                    <Login />
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default LoginTemplate

import React from 'react';
import { Header, Footer, Products } from '../../organisms';
import "./style.scss";

const HomeTemplate = () => {
    return (
        <React.Fragment>
            <Header />
                <main className="home-wrapper">
                    <Products />
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default HomeTemplate

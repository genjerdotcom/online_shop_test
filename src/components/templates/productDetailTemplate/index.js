import React from 'react';
import { Header, Footer, ProductDetail } from '../../organisms';
import "./style.scss";

const ProductDetailTemplate = () => {
    return (
        <React.Fragment>
            <Header />
                <main className="home-wrapper">
                    <ProductDetail />
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default ProductDetailTemplate

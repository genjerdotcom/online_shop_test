import React from 'react';
import { Heading } from '../..';
import { Header, Footer } from '../../organisms';

const ErrorTemplate = ({...props}) => {
    return (
        <React.Fragment>
            <Header />
                <main className="home-wrapper">
                    <Heading tag="h1" visualLevel="1" className="text-center bold error">
                        {props.title}
                    </Heading>
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default ErrorTemplate

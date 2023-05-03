import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                (<title>{pageTitle}</title>)
                <meta name="H&M Innovance LLP" content="IT Solution Company" />
                <meta name="description" content="H&M Innovance LLP is a IT Solution Company" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
    );
};

export default PageHelmet;
import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from 'styled-components';
import SEO from "./components/seo";
import config from "../../data/SiteConfig";
import GlobalStyles from "../styles/globalStyles";
import defaultTheme from "../styles/theme.js";

export default class BaseLayout extends React.Component {
    render(){
        const { children } = this.props;
        return(
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <SEO />
                <Helmet>
                    <html lang="en" />
                    <title>{ config.siteTitle }</title>
                </Helmet>
                <main id="main">
                    { children }
                </main>
            </ThemeProvider>
        );
    }
}
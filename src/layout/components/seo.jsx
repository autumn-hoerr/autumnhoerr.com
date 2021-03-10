import React, { Component }  from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/SiteConfig";

class SEO extends Component {
    render(){
        const { postNode, postPath, postSEO } = this.props;
        let title = config.siteTitle;
        let description = config.siteDescription;
        let image = config.siteLogo;
        let postURL = config.siteUrl;

        return(
            <Helmet>
                <link id="favicon" rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
                <meta name="description" content={description} />
                <meta name="image" content={image} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={postURL} />
                {postSEO ? <meta property="og:type" content="article" /> : null}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta
                property="fb:app_id"
                content={config.siteFBAppID ? config.siteFBAppID : ""}
                />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                name="twitter:creator"
                content={config.userTwitter ? config.userTwitter : ""}
                />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        )
    }
}

export default SEO;
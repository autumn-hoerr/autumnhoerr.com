import React from "react";
import Layout from "../layout";
import Hero from "../components/components/hero/hero"

export default class Home extends React.Component {
    render(){
        return(
            <Layout>
                <Hero />
            </Layout>
        )
    }
}
import React from "react";
import styled from 'styled-components';
import Layout from "@layout";
import Container from "@atoms/container";
import { StaticImage } from "gatsby-plugin-image"


const Intro = styled.div`
    display: flex;
    flex-flow: column nowrap;
    @media(min-width: ${props => props.theme.devices.tablet}){
        flex-flow: row nowrap;
    }
    .c-intro__image{
        width: 100%;
        @media(min-width: ${props => props.theme.devices.tablet}){
            width: 60%;
        }
    }
`;

const IntroText = styled.p`
    width: 100%;
    font-size: 34px;
    font-family: 'Lora', serif;
    line-height: 1.5;
    @media(min-width: ${props => props.theme.devices.tablet}){
        padding-left: ${props => props.theme.spacing.xl}; 
        margin: -14px 0 0 0;
        width: 40%;
    }
`;


const Home = (props) => {
    return(
        <Layout>
            <Container>
                <Intro>
                    <StaticImage 
                        src="../../static/imgs/dan_ev.jpg"
                        alt="Dan and his son, Everett, in a restaurant pressing their foreheads together and smiling."
                        placeholder="blurred"
                        loading="eager"
                        className="c-intro__image"
                        width={700}
                        
                    />
                    <IntroText>
                         I'm the Head of Web Development for <a href="https://www.appdirect.com">AppDirect</a>. I live and work remotely from Wilmington, NC.
                    </IntroText>
                </Intro>
            </Container>
            
        </Layout>
    )
}

export default Home;
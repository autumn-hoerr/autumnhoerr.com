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
                        src="../../static/imgs/autumn_ev.jpg"
                        alt="Autumn and her son, Everett, in a restaurant pressing their foreheads together and smiling."
                        placeholder="blurred"
                        loading="eager"
                        className="c-intro__image"
                        width={700}
                        
                    />
                    <IntroText>
                         I'm a Sr. Developer for <a href="https://www.allovue.com/">Allovue</a>. I live and work remotely from Wilmington, NC.
                    </IntroText>
                </Intro>
            </Container>
            
        </Layout>
    )
}

export default Home;
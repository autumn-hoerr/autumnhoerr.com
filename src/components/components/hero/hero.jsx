import React from "react";
import styled from 'styled-components';
import Container from "../../../layout/components/container";
import SocialLinks from "../../molecules/socialLinks";
import H1 from "../../atoms/h1";

const StyledHero = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Hero = () => (
    <Container>
        <StyledHero>
            <H1 content="Dan Hoerr" />
            <SocialLinks />
        </StyledHero>
    </Container>
);

export default Hero
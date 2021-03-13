import React from "react";
import styled from 'styled-components';
import Container from "@atoms/container";
import SocialLinks from "@molecules/socialLinks";
import H1 from "@atoms/h1";

const StyledHeader = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${props => props.theme.spacing.l};
`;

const Header = () => (
    <Container>
        <StyledHeader>
            <H1 content="Dan Hoerr" />
            <SocialLinks />
        </StyledHeader>
    </Container>
);

export default Header
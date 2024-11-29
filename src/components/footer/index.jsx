import React from "react";
import styled from 'styled-components';
import Container from '@atoms/container';
import Navigation from "@molecules/navigation";

const StyledFooter = styled.footer`
    border-top: 1px solid ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const Copy = styled.span`
    float: right;
    margin-top: ${props => props.theme.spacing.l};
`;

const Footer = () => (
    <Container>
        <StyledFooter>
                <Navigation label="Footer Navigation" />
                <Copy>&copy;Autumn Hoerr, { new Date().getFullYear() }</Copy>
        </StyledFooter>
    </Container>
)

export default Footer
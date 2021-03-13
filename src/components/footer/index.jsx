import React from "react";
import styled from 'styled-components';
import Container from '@atoms/container';

const StyledFooter = styled.footer`
    border-top: 1px solid ${props => props.theme.colors.black};
`;

const Copy = styled.span`
    float: right;
    margin-top: ${props => props.theme.spacing.l};
`;

const Footer = () => (
    <Container>
        <StyledFooter>
                <Copy>&copy;Dan Hoerr, { new Date().getFullYear() }</Copy>
        </StyledFooter>
    </Container>
)

export default Footer
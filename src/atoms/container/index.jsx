import React from "react";
import styled from 'styled-components';


const StyledSection = styled.section`
    padding: ${props => props.condensed ? 
        props.theme.components.condensedVerticalPadding : 
        props.theme.components.defaultVerticalPadding};
    & + &{
        padding-top: 0;
    }
`;

const StyledContainer = styled.div`
    max-width: ${props => props.theme.page.maxWidth};
    padding: 0 ${props => props.theme.spacing.l};
    margin: 0 auto;
`;

const Container = (props) => (
    <StyledSection className={props.classname}>
        <StyledContainer>
            {props.children}
        </StyledContainer>
    </StyledSection>
);

export default Container;
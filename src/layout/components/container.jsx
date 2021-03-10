import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: ${props => props.theme.page.maxWidth};
    padding: ${props => props.condensed ? 
                    props.theme.components.condensedPadding : 
                    props.theme.components.defaultPadding};
    margin: 0 auto;
`;

const Container = (props) => (
    <section className={props.classname}>
        <StyledContainer>
            {props.children}
        </StyledContainer>
    </section>
);

export default Container;
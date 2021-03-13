import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-weight: normal;
    margin: 0
`;

const H1 = (props) => {
    return(
        <StyledH1>
            {props.content}
        </StyledH1>
    );
}

export default H1;
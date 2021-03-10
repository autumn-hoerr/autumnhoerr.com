import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: 'Lora', serif;
`;

const H1 = (props) => {
    return(
        <StyledH1>
            {props.content}
        </StyledH1>
    );
}

export default H1;
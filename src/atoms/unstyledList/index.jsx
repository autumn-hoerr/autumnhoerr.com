import React from "react";
import styled from 'styled-components';

const StyledUnstyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const UnstyledList = (props) => {
    let {
        className,
        ...otherProps
    } = props;
    
    return(
        <StyledUnstyledList className={className} {...otherProps} >
            { props.children }
        </StyledUnstyledList>
    );
};

export default UnstyledList;
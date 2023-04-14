import styled from 'styled-components';

export const StyledP = styled.p`
    margin: 0 0 1em 0;
`;

export const SmooshedP = styled(StyledP)`
    margin: ${props => props.linefix ? `17px 0 .5em 0` : `0 0 .5em 0`};
`;

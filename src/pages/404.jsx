import React from "react";
import styled from 'styled-components';
import Layout from "@layout";
import Container from "@atoms/container";

const StyledError = styled.div`
    text-align: center;
`;

const Four04 = (props) => {
    return(
        <Layout>
            <Container>
                <StyledError>
                    <h1>404</h1>
                    <p>Whoops, something went wrong. We can't find that page.</p>
                </StyledError>
            </Container>
        </Layout>
    )
}

export default Four04;
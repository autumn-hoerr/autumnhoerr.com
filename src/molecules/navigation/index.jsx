import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby"
import UnstyledList from "@atoms/unstyledList";

const StyledMast = styled(Link)`
    font-size: 2em;
    margin: 0;
    text-decoration: none;
    color: ${props => props.theme.colors.black }
`;

// wrapping this to interpolate below
const StyledLink = styled(Link)``;

const StyledNav = styled(UnstyledList)`
    display: flex;
    align-items: baseline;
    li{
        margin-right: 25px;
    }
    ${StyledLink} {
        text-decoration: none;
    }
`;

const Navigation = (props) => {
    let homelink;
    if (props.siteTitle ){
        homelink = <StyledMast to="/" activeClassName="is-active">Autumn Hoerr</StyledMast>
    } else {
        homelink = <StyledLink to="/" activeClassName="is-active">Home</StyledLink>
    }

    return(
        <nav aria-label={props.label}>
            <StyledNav>
                <li>{homelink}</li>
                <li><StyledLink to="/resume" activeClassName="is-active">Resume</StyledLink></li> 
            </StyledNav>

        </nav>
    )

}

export default Navigation
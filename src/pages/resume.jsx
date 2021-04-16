import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby"
import config from "@data/SiteConfig";
import Layout from "@layout";
import Container from "@atoms/container";
import { SmooshedP } from "@atoms/p";

const ResumeRow = styled.div`
    @media(min-width: ${props => props.theme.devices.tablet} ){
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
    }
`;

const ResumeMeta = styled.div`
    @media(min-width: ${props => props.theme.devices.tablet} ){
        text-align: right;
        flex-basis: 30%;
        min-width: 30%;
        padding-right: 20px;
        position: relative;
        top: ${props => props.pushdown ? '45px' : '0px'}
    }
`;

const ResumeDesc = styled.div`
    border-bottom: ${props => props.bordered ? '1px solid' + props.theme.colors.black : 'none' };
    @media(min-width: ${props => props.theme.devices.tablet} ){
        flex-basis: 70%;
        min-width: 70%
    }
`;

const Resume = (props) => {
    const res = props.data.resumeJson;
    return(
        <Layout>
            <Helmet>
                <title>Resume - { config.siteTitle }</title>
            </Helmet>
            <Container>
                <ResumeRow>
                    <ResumeMeta pushdown>
                        <h4>{res.email}</h4>
                        <h5>{res.phone}</h5>
                    </ResumeMeta>
                    <ResumeDesc>
                        <h1>Dan Hoerr</h1>
                        <SmooshedP>{res.description}</SmooshedP>                        
                    </ResumeDesc>
                </ResumeRow>
                <ResumeRow>
                    <ResumeDesc bordered>
                        <h2>Education</h2>
                    </ResumeDesc>
                </ResumeRow>
                <ResumeRow>
                    <ResumeMeta>
                        <h4>Class of {res.education.class}</h4>
                        <h5>{res.education.location}</h5>
                    </ResumeMeta>
                    <ResumeDesc>
                        <h3>{res.education.college}</h3>
                        <p>{res.education.degree}</p>
                    </ResumeDesc>
                </ResumeRow>
                <ResumeRow>
                    <ResumeDesc bordered>
                        <h2>Experience</h2>
                    </ResumeDesc>
                </ResumeRow>
                { res.jobs.map( (job, i) => (
                    <>  
                        <ResumeRow key={i}>
                            <ResumeMeta>
                                <h4>{job.company}</h4>
                                <h5>{job.years}</h5>
                            </ResumeMeta>
                            <ResumeDesc>
                                <h3>{job.title}</h3>
                                <p>{job.description}</p>
                            </ResumeDesc>
                        </ResumeRow>
                    </>
                ))}
            </Container>
        </Layout>
    );
}

export const query = graphql`
    query ResumeQuery{
        resumeJson {
            address
            email
            education {
                college
                class
                degree
                location
            }
            github
            phone
            website
            description
            jobs {
              company
              description
              projects {
                URL
                description
                title
              }
              title
              years
            }
        }
    }
`

export default Resume;

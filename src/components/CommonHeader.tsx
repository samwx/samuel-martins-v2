import React from 'react';
import { MainNavigation } from '../styles/MainNavigation';
import { InlineMenu } from '../styles/InlineMenu';
import { Navigation } from './Navigation';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Container } from '../styles/Container';

const pageQuery = graphql`
    query CommonHeader {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export const CommonHeader = () => (
    <StaticQuery
        query={pageQuery}
        render={data => (
            <MainNavigation>
                <Container>
                    <figure>
                        <Link to="/">
                            <img
                                src={
                                    data?.markdownRemark?.frontmatter?.image
                                        ?.childImageSharp?.fluid?.src
                                }
                                alt="Samuel Martins"
                            />
                            <h3>Samuel Martins</h3>
                        </Link>
                    </figure>
                    <InlineMenu>
                        <Navigation />
                    </InlineMenu>
                </Container>
            </MainNavigation>
        )}
    />
);

import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { PageContainer } from '../styles/PageContainer';
import { PageHeader } from '../styles/PageHeader';
import { Container } from '../styles/Container';
import { PostItem } from '../components/PostItem';

interface TagRouteProps {
    data: {
        allMarkdownRemark: {
            edges: Array<any>,
            totalCount: number,
        },
        site: {
            siteMetadata: {
                title: string;
            }
        }
    };

    pageContext: {
        tag: string;
    };
}

const TagRoute: React.FunctionComponent<TagRouteProps> = (props) => {
    const posts = props.data.allMarkdownRemark.edges;
    const tag = props.pageContext.tag;
    const title = props.data.site.siteMetadata.title;
    const totalCount = props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } encontrados em “${tag}”`;

    return (
        <Layout>
            <Helmet title={`${tag} | ${title}`} />
            <PageHeader>
                <h4>{tagHeader}</h4>
            </PageHeader>
            <Container>
                <PageContainer>
                    {posts?.map(({ node: post }) => (
                        <PostItem
                            key={post.id}
                            post={post}
                            showImage={true}
                            showReadTime={true}
                        />
                    ))}
                </PageContainer>
            </Container>
        </Layout>
    );
};

export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                        readingTime {
                            minutes
                        }
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        tags
                        featuredimage {
                            childImageSharp {
                                fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

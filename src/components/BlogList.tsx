import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { PostItem } from './PostItem';

interface BlogRollProps {
    data: { allMarkdownRemark: { edges: Array<any> } };
}

const BlogRoll: React.FunctionComponent<BlogRollProps> = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div>
            {posts?.map(({ node: post }) => (
                <PostItem key={post.id} post={post} showImage={true} showReadTime={true} />
            ))}
        </div>
    );
};

export const BlogList: React.FunctionComponent<{}> = () => (
    <StaticQuery
        query={graphql`
            query BlogRollQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
                    }
                ) {
                    edges {
                        node {
                            excerpt(pruneLength: 400)
                            id
                            fields {
                                slug
                                readingTime {
                                    minutes
                                }
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                description
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 120, quality: 70) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => <BlogRoll data={data} />}
    />
);

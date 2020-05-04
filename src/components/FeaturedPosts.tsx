import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { PostItem } from './PostItem';

interface FeaturedListProps {
    data: { allMarkdownRemark: { edges: Array<any> } };
}

const BlogRoll: React.FunctionComponent<FeaturedListProps> = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <>
            <div>
                {posts &&
                    posts.map(({ node: post }) => <PostItem post={post} />)}
            </div>
            <p>
                <h3>
                    <Link to="/blog">Ver tudo →</Link>
                </h3>
            </p>
        </>
    );
};

export const FeaturedPosts: React.FunctionComponent<{}> = () => (
    <StaticQuery
        query={graphql`
            query FeaturedPostsQuery {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    filter: {
                        frontmatter: { templateKey: { eq: "blog-post" } }
                    }
                    limit: 3
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                templateKey
                                date(formatString: "MMMM DD, YYYY")
                                description
                            }
                        }
                    }
                }
            }
        `}
        render={data => <BlogRoll data={data} />}
    />
);

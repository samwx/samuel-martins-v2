import React, { ReactElement } from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Container } from '../styles/Container';
import { PageTitle } from '../styles/PageTitle';
import { PostHeader } from '../styles/PostHeader';
import { PostContainer } from '../styles/PostContainer';
import { InlineList } from '../styles/InlineList';
import { Share } from '../components/Share';

interface BlogPostTemplate {
    content: ReactElement;
    contentComponent: () => ReactElement;
    title: string;
    helmet: any;
    tags: Array<string>;
    readingTime: { minutes: number };
    date: string;
    featuredimage: any;
}

const BlogPostTemplate: React.FunctionComponent<BlogPostTemplate> = ({
    content,
    contentComponent,
    tags,
    title,
    helmet,
    readingTime,
    date,
    featuredimage
}) => {
    const PostContent = contentComponent || Content;
    const location = window.location.href.slice(0, -1);

    return (
        <>
            <PostHeader>
                {helmet || ''}
                <PageTitle>
                    <h1 className="post-title">{title}</h1>
                </PageTitle>
                <p className="post-meta">
                    {date}{' '}
                    {`• 📚 Leitura de ${Math.round(readingTime.minutes)} min`}
                </p>
            </PostHeader>
            <Img fluid={featuredimage.childImageSharp.fluid} />
            <PostContainer>
                <PostContent content={content} />
                <>
                    {tags && tags.length ? (
                        <div>
                            <Share link={location} text={title} />
                            <div>
                                <span>Tags: </span>
                                <InlineList>
                                    {tags.map(tag => (
                                        <li key={tag + `tag`}>
                                            <Link
                                                to={`/tags/${kebabCase(tag)}/`}
                                            >
                                                {tag}
                                            </Link>
                                        </li>
                                    ))}
                                </InlineList>
                            </div>
                        </div>
                    ) : null}
                </>
            </PostContainer>
        </>
    );
};

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <Container>
                <BlogPostTemplate
                    content={post.html}
                    contentComponent={HTMLContent}
                    helmet={
                        <Helmet titleTemplate="%s | Blog">
                            <title>{`${post.frontmatter.title}`}</title>
                            <meta
                                name="description"
                                content={`${post.frontmatter.description}`}
                            />
                        </Helmet>
                    }
                    tags={post.frontmatter.tags}
                    title={post.frontmatter.title}
                    readingTime={post.fields.readingTime}
                    date={post.frontmatter.date}
                    featuredimage={post.frontmatter.featuredimage}
                />
            </Container>
        </Layout>
    );
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            fields {
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
`;

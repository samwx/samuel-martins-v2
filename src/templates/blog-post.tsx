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
import { windowGlobal } from '../utils/window';
import { Disqus } from 'gatsby-plugin-disqus';
import { Comments } from '../styles/Comments';

interface BlogPostTemplateProps {
    content: ReactElement;
    contentComponent: () => ReactElement;
    title: string;
    helmet: any;
    tags: Array<string>;
    readingTime: { minutes: number };
    date: string;
    featuredimage: any;
    featuredimageauthor: string;
    featuredimagelink: string;
    postId: number;
}

export const BlogPostTemplate: React.FunctionComponent<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    tags,
    title,
    helmet,
    readingTime,
    date,
    featuredimage,
    featuredimageauthor,
    featuredimagelink,
    postId
}) => {
    const PostContent = contentComponent || Content;
    const location = windowGlobal?.location?.href?.slice(0, -1);
    const disqusConfig = {
        identifier: postId,
        title,
    };

    return (
        <>
            <PostHeader>
                {helmet || ''}
                <PageTitle>
                    <h1 className="post-title">{title}</h1>
                </PageTitle>
                <p className="post-meta">
                    {date}{' '}
                    {`• 📚 Leitura de ${Math.round(readingTime?.minutes)} min`}
                </p>
            </PostHeader>
            <Img fluid={featuredimage?.childImageSharp?.fluid} />
            <PostContainer>
                {featuredimageauthor && <p className="image-author-credits">Foto por: <a href={featuredimagelink} target="_blank">{featuredimageauthor}</a></p>}
                <PostContent content={content} />
                {tags && tags.length ? (
                    <>
                        <Share link={location} text={title} />
                        <div>
                            <span>Tags: </span>
                            <InlineList>
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>
                                        <Link to={`/tags/${kebabCase(tag)}/`}>
                                            {tag}
                                        </Link>
                                    </li>
                                ))}
                            </InlineList>
                        </div>
                    </>
                ) : null}
            </PostContainer>
            <Comments>
                <Disqus config={disqusConfig} />
            </Comments>
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
                            <meta
                                property="og:image"
                                content={post.frontmatter.featuredimage?.childImageSharp?.fluid?.src}
                            />
                        </Helmet>
                    }
                    tags={post.frontmatter.tags}
                    title={post.frontmatter.title}
                    readingTime={post.fields.readingTime}
                    date={post.frontmatter.date}
                    featuredimage={post.frontmatter.featuredimage}
                    featuredimageauthor={post.frontmatter.featuredimageauthor}
                    featuredimagelink={post.frontmatter.featuredimagelink}
                    postId={post.id}
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
                featuredimageauthor
                featuredimagelink
            }
        }
    }
`;

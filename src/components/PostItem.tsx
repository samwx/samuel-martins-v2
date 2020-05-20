import React from 'react';
import { Link } from 'gatsby';
import { PostListItem } from '../styles/PostListItem';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { PageTitle } from '../styles/PageTitle';

interface PostItemProps {
    post: {
        id?: number;
        fields: any;
        frontmatter: any;
    };
    showImage?: boolean;
    showReadTime?: boolean;
}

export const PostItem: React.FunctionComponent<PostItemProps> = ({
    post,
    showImage,
    showReadTime
}) => (
    <PostListItem>
        <header>
            <PageTitle>
                <h3 className="post-title">
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
            </PageTitle>
            {showImage && post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: post.frontmatter.title
                        }}
                    />
                </div>
            ) : (
                undefined
            )}
            <p className="post-meta">
                {post.frontmatter.date}{' '}
                {showReadTime &&
                    `• 📚 Leitura de ${Math.round(
                        post.fields.readingTime.minutes
                    )} min`}
            </p>
        </header>
        <p className="post-item-description">{post.frontmatter.description}</p>
        <Link className="read-more-link" to={post.fields.slug}>Leia mais →</Link>
    </PostListItem>
);

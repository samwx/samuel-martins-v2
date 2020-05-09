import React from 'react';
import { Link } from 'gatsby';
import { PostListItem } from '../styles/PostListItem';
import PreviewCompatibleImage from './PreviewCompatibleImage';

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
    showReadTime,
}) => (
    <PostListItem>
        <header>
            <h3 className="post-title">
                <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                >
                    {post.frontmatter.title}
                </Link>
            </h3>
            {showImage && post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: post.frontmatter.title,
                        }}
                    />
                </div>
            ) : undefined}
            <p className="post-meta">{post.frontmatter.date} {showReadTime && `• 📚 Leitura de ${Math.round(post.fields.readingTime.minutes)} min`}</p>
        </header>
        <p className="post-item-description">{post.frontmatter.description}</p>
    </PostListItem>
);

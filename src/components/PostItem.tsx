import React from 'react';
import { Link } from 'gatsby';
import { PostListItem } from '../styles/PostListItem';

interface PostItemProps {
    post: {
        id: number;
        fields: any;
        frontmatter: any;
    };
}

export const PostItem: React.FunctionComponent<PostItemProps> = ({ post }) => (
    <PostListItem>
        <header>
            <h3>
                <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                >
                    {post.frontmatter.title}
                </Link>
            </h3>
            <p className="post-meta">{post.frontmatter.date}</p>
        </header>
        <p className="post-item-description">{post.frontmatter.description}</p>
    </PostListItem>
);

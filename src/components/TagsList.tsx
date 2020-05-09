import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql, StaticQuery } from 'gatsby';
import { InlineMenu } from '../styles/InlineMenu';
import { TagsContainer } from '../styles/TagsContainer';

const Tags = ({
    data: {
        allMarkdownRemark: { group }
    }
}) => (
    <TagsContainer>
        <ul>
            {group.map(tag => (
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue}
                    </Link>
                </li>
            ))}
        </ul>
    </TagsContainer>
);

const tagsComponentQuery = graphql`
    query TagsQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
            }
        }
    }
`;

export const TagsList = () => (
    <StaticQuery
        query={tagsComponentQuery}
        render={data => <Tags data={data} />}
    ></StaticQuery>
);

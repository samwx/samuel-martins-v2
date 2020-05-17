import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { GenericContentList } from '../components/GenericContentList';

interface ArticlesPageTemplateProps {
    title: string;
    articlesList: Array<{
        articleTitle: string;
        articleDescription: string;
        articleLink: string;
    }>;
}

export const ArticlesPageTemplate: React.FunctionComponent<ArticlesPageTemplateProps> = ({
    title,
    articlesList
}) => {
    const genericList = articlesList.reduce(
        (xs, x) =>
            xs.concat({
                itemTitle: x.articleTitle,
                itemDescription: x.articleDescription,
                itemLink: x.articleLink
            }),
        []
    );
    return <GenericContentList pageTitle={title} list={genericList} />;
};

const ArticlesPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <ArticlesPageTemplate
                title={post.frontmatter.title}
                articlesList={post.frontmatter.articlesList}
            />
        </Layout>
    );
};

export default ArticlesPage;

export const articlesPageQuery = graphql`
    query ArticlesPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                articlesList {
                    articleTitle
                    articleDescription
                    articleLink
                }
            }
        }
    }
`;

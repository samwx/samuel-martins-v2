import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { GenericContentList } from '../components/GenericContentList';

interface TalksPageTemplateProps {
    title: string;
    talksList: Array<{
        talkTitle: string;
        talkDescription: string;
        talkLink: string;
    }>;
}

export const TalksPageTemplate: React.FunctionComponent<TalksPageTemplateProps> = ({
    title,
    talksList
}) => {
    const genericList = talksList.reduce(
        (xs, x) =>
            xs.concat({
                itemTitle: x.talkTitle,
                itemDescription: x.talkDescription,
                itemLink: x.talkLink
            }),
        []
    );
    return <GenericContentList pageTitle={title} list={genericList} />;
};

const TalksPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <TalksPageTemplate
                title={post.frontmatter.title}
                talksList={post.frontmatter.talksList}
            />
        </Layout>
    );
};

export default TalksPage;

export const talksPageQuery = graphql`
    query TalksPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                talksList {
                    talkTitle
                    talkDescription
                    talkLink
                }
            }
        }
    }
`;

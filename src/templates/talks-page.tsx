import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

interface TalksPageTempalateProps {
    title: string;
    content: string;
    contentComponent?: () => ReactElement;
}

export const TalksPageTemplate: React.FunctionComponent<TalksPageTempalateProps> = ({
    title,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TalksPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <TalksPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
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
            }
        }
    }
`;

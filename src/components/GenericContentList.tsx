import React from 'react';
import { Container } from '../styles/Container';
import { PageHeader } from '../styles/PageHeader';
import Helmet from 'react-helmet';
import { GenericListItem } from './GenericListItem';

interface GerenicContentListPageTempalateProps {
    pageTitle: string;
    list: Array<{
        itemTitle: string;
        itemDescription: string;
        itemLink: string;
    }>;
}

export const GenericContentList: React.FunctionComponent<GerenicContentListPageTempalateProps> = ({
    pageTitle,
    list
}) => (
    <Container>
        <PageHeader>
            <Helmet titleTemplate="%s | Blog">
                <title>{`${pageTitle}`}</title>
            </Helmet>
            <h1 className="post-title">{pageTitle}</h1>
        </PageHeader>

        {list.map(({ itemTitle, itemDescription, itemLink }) => (
            <GenericListItem
                itemTitle={itemTitle}
                itemDescription={itemDescription}
                itemLink={itemLink}
            />
        ))}
    </Container>
);

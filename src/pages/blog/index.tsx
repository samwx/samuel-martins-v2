import React from 'react';

import { Layout } from '../../components/Layout';
import { BlogList } from '../../components/BlogList';
import { PageHeader } from '../../styles/PageHeader';
import { Container } from '../../styles/Container';
import { PageContainer } from '../../styles/PageContainer';

const BlogIndexPage: React.FunctionComponent<{}> = () => (
    <Layout>
        <PageHeader>
            <h1>Blog</h1>
        </PageHeader>
        <Container>
            <PageContainer>
                <BlogList />
            </PageContainer>
        </Container>
    </Layout>
);

export default BlogIndexPage;

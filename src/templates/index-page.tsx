import React from 'react';
import { graphql } from 'gatsby';

import { FluidObject } from 'gatsby-image';

import { Layout } from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import { HomeBoxes } from '../styles/HomeBoxes';
import { ColoredBox } from '../styles/ColoredBox';
import { colors } from '../styles/variables/colors';
import { Header } from '../styles/Header';
import { Navigation } from '../components/Navigation';
import { HomeNavigation } from '../styles/HomeNavigation';
import { Profile } from '../components/Profile';
import { Container } from '../styles/Container';
import { PersonalDescription } from '../styles/PersonalDescription';
import { BlogListContainer } from '../styles/BlogListContainer';

interface IndexPageTemplateProps {
    image: {
        childImageSharp: { fluid: FluidObject };
    };
    title: string;
    description: string;
    heading: string;
    social: Array<{ image: { publicURL: string }; link: string }>;
}

interface IndexPageProps {
    data: {
        markdownRemark: {
            frontmatter: IndexPageTemplateProps;
        };
    };
}

export const IndexPageTemplate: React.SFC<IndexPageTemplateProps> = ({
    image,
    title,
    description,
    heading,
    social
}) => (
    <>
        <Header>
            <Container>
                <HomeNavigation>
                    <Navigation />
                </HomeNavigation>

                <div className="flex items-center">
                    <div className="w-30">
                        <Profile image={image} social={social} />
                    </div>

                    <PersonalDescription className="w-70">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </PersonalDescription>
                </div>
            </Container>
        </Header>
        <Container>
            <BlogListContainer>
                <h2>{heading}</h2>
                <BlogRoll />
            </BlogListContainer>
        </Container>
        <HomeBoxes>
            <ColoredBox background={colors.primaryRed}>
                <h3>Talks</h3>
                <div className="box-description">
                    Palestras, apresentações e etc
                </div>
            </ColoredBox>
            <ColoredBox background={colors.primaryYellow}>
                <h3>Artigos</h3>
                <div className="box-description">
                    Publicações e trabalhos de conclusão de curso
                </div>
            </ColoredBox>
        </HomeBoxes>
    </>
);

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout hideHeader={true}>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                social={frontmatter.social}
            />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                description
                social {
                    link
                    image {
                        publicURL
                    }
                }
            }
        }
    }
`;

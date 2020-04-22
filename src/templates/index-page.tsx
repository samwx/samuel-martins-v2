import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from "gatsby-image"

import { Layout } from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
    image,
    title,
    description,
    heading,
    social
}) => (
    <div>
        <img src={image.childImageSharp.fluid.src} alt="Samuel Martins" />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <ul>
            {social.map(s => (
                <li>
                    <a href={s.link}>
                        <img alt={s.link} src={s.image.publicURL} />
                    </a>
                </li>
            ))}
        </ul>
        <h3>{heading}</h3>
        <div>
            <BlogRoll />
        </div>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    social: PropTypes.array
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
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

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
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

require('dotenv').config();

const postQuery = `{
    posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/posts/" } }
    ) {
        edges {
            node {
                objectID: id
                fields {
                    slug
                    readingTime {
                        minutes
                    }
                }
                frontmatter {
                    title
                    description
                    date(formatString: "MMM D, YYYY")
                }
            }
        }
    }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
]

module.exports = queries;
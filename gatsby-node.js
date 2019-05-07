/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
      
     {
        categories:  allContentfulCategory {
          edges {
            node {
                title
                id
                slug
                
            }
          }
        }
      }
    `)
  data.categories.edges.forEach(edge => {
    if (!edge.node.title.includes('Cases')) {

      const slug = edge.node.slug;
      const id = edge.node.id;
      actions.createPage({
        path: `mobile-cases/${slug}`,
        component: require.resolve(`./src/dpages/category.js`),
        context: { slug: slug, id: id },
      })
    }
  })
}
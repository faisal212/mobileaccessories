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
        
        mobiles:   allContentfulMobile{
          edges{
            node{
              id
              title
              slug
              category{
                slug
              }
              products{
                id
                title
                slug
              }
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
        path:slug,
        component: require.resolve(`./src/dpages/category.js`),
        context: { slug: slug, id: id },
      })
    }
  });


  data.mobiles.edges.forEach(edge => {
    const slug = edge.node.slug;
    const id = edge.node.id;
    const parent = edge.node.category;
    const products = edge.node.products ;
    if( parent !== null){
      actions.createPage({
        path: `${parent.slug}/mobiles/${slug}`,
        component: require.resolve(`./src/dpages/mobiles.js`),
        context: { slug: slug, id: id },
      });

      if(products !== null){
        products.forEach(product => {
          actions.createPage({
            path: `${parent.slug}/mobiles/${slug}/products/${product.slug}`,
            component: require.resolve(`./src/dpages/product.js`),
            context: { slug: product.slug, id: product.id },
          });
        });
      }
    }
  });


}
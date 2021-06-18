/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require( "path" )

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve( __dirname, "src/components" ),
                "@styles": path.resolve( __dirname, "src/components/styles" ),
                "@utils": path.resolve( __dirname, "src/utils" ),
            }
        }
    })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const projectTemplate = require.resolve( `./src/templates/project.js` )
    const postTemplate = require.resolve( `./src/templates/post.js` )

    const result = await graphql(`
      {
        allMdx(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)

    if ( result.errors ) {
        reporter.panicOnBuild( `Error running GraphQL query` )
    }

    result.data.allMdx.edges.forEach( ({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: node.frontmatter.slug.match( /^\/projects/ ) ? projectTemplate : postTemplate,
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}

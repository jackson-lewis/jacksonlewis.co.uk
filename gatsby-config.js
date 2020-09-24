module.exports = {
    siteMetadata: {
        title: `Jackson Lewis`,
        description: `Frontend developer`,
        author: `@jacksonrlewis`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jackson Lewis`,
                short_name: `Jackson`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [ `Source Serif Pro:400`, `Source Sans Pro:200,400,600` ]
                },
                classes: false,
                events: false
            }
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${ __dirname }/src/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${ __dirname }/src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                mode: 'development',
                extensions: [ `.md`, `.mdx` ],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 880,
                            linkImagesToOriginal: false,
                            showCaptions: true
                        }
                    }
                ]
            }
        }
    ],
}

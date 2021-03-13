/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: { 
              "@atoms": "src/atoms",
              "@molecules": "src/molecules",
              "@components": "src/components",
              "@styles": "src/styles",
              "@layout": "src/layout",
              "@data": "data",
              "@imgs": "static/imgs"
            },
          extensions: []
        }
      }
  ],
}
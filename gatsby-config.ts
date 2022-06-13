import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Salon Elizabeth`,
    description: `Salon kosmetyczny elizabeth to gabinet, którego atutem jest wrażliwość na piękno. Oferowany jest szereg zabiegów takich jak makijaże, hanny, zabiegi na twarz oraz wiele innych.`,
    siteUrl: `https://www.salon-elizabeth.pl/`,
    author: `Jakub Chorzepa`,
    keywords: ['Salon kosmetyczny', 'salon piękności', 'gabinet kosmetyczny', 'piękno', 'uroda', 'hanna', 'oczyszczanie', 'makeup', 'makijaż' ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", "gatsby-plugin-react-helmet", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`,
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
        options: {
          fonts: [
            `Poppins`,
          ],
        display: 'swap'
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    }
  ]

};

export default config;

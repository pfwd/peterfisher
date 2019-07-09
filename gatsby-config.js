module.exports = {
  siteMetadata: {
    title: `Peter Fisher`,
    description: `Peter Fisher is a Freelance Web Developer, a coding teacher at How To Code Well and host of the How To Code Well Podcast`,
    author: `@pfwd`,
    menuLinks:[
      {
        'name' : 'CV',
        'link' : 'https://github.com/pfwd/cv',
      },
      {
        'name' : 'Websomatic',
        'link' : 'http://websomatic.co.uk',
      },
      {
        'name' : 'How To Code Well',
        'link' : 'https://howtocodewell.net',
      },
        {
        'name' : 'Hire Me',
        'link' : 'mailto:hello@websomatic.co.ukt',
      },
    ],
    footerLinks:[
      {
        'name' : 'My Talks',
        'link' : 'https://www.youtube.com/playlist?list=PLZdsdjcJ44WXOVd6HWU-D-j6Knr01B29b',
      },
      {
        'name' : 'Latest Projects',
        'link' : 'http://websomatic.co.uk',
      },
      {
        'name' : 'Hire Me',
        'link' : 'mailto:hello@websomatic.co.uk',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

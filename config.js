const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: 'https://tutorial-portfolio.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'src/component/images/amazonlumberyard.svg',
    logoLink: 'https://tutorial-portfolio.netlify.app/',
    title:
      "<a href='https://tutorial-portfolio.netlify.app/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/FiniteStateGit/tutorial-portfolio',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    "search": {
  		"enabled": true,
  		"indexName": "tutorial_index",
  		"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
  		"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  		"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
  	},
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Tutorial Portfolio', link: 'https://tutorial-portfolio.netlify.app/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://tutorial-portfolio.netlify.app/'>graphql </a><div class='greenCircle'></div><a href='https://tutorial-portfolio.netlify.app/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/FiniteStateGit/tutorial-portfolio/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Jonathan Capes - Tutorial Portfolio',
      short_name: 'TutorialPortfolio',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

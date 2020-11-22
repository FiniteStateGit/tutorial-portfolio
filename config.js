const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: 'https://tutorial-portfolio.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/amazonlumberyard.svg",
    logoLink: 'https://aws.amazon.com/lumberyard/',
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
      '/01-popups',
      '/02-cursor-raycast',
      '/03-ui-draggables',
      '/04-group-selection',
      '/05-force-movement',
      '/06-input-contexts',
      '/07-cameras',
      '/08-ui-dynamic-content',
      '/09-sc-logic',
      '/10-sc-timing',
      '/11-ai-simplestate',
      '/12-ai-behaviortree',
      '/13-ai-scoring',
      '/14-ai-decisionmaps',
      '/15-ai-goap',
      '/16-ai-tasknetworks',
      '/17-ai-infiniteaxis',
      '/auxiliary'
    ],
    collapsedNav: [
      '/01-popups', // add trailing slash if enabled above
      '/02-cursor-raycast',
      '/03-ui-draggables',
      '/04-group-selection',
      '/05-force-movement',
      '/06-input-contexts',
      '/07-cameras',
      '/08-ui-dynamic-content',
      '/09-sc-logic',
      '/10-sc-timing',
      '/11-ai-simplestate',
      '/12-ai-behaviortree',
      '/13-ai-scoring',
      '/14-ai-decisionmaps',
      '/15-ai-goap',
      '/16-ai-tasknetworks',
      '/17-ai-infiniteaxis',
    ],
    links: [
            { text: 'Lumberyard Welcome Guide', link: 'https://docs.aws.amazon.com/lumberyard/latest/welcomeguide/index.html' },
            { text: 'Lumberyard User Guide', link: 'https://docs.aws.amazon.com/lumberyard/latest/userguide/index.html' },
            { text: 'Lumberyard Tutorials', link: 'https://docs.aws.amazon.com/lumberyard/latest/tutorials/index.html' },
            { text: 'Lumberyard Engine API Reference', link: 'https://docs.aws.amazon.com/lumberyard/latest/apireference/index.html' },
            { text: 'Lumberyard Developer Forums', link: 'https://forums.awsgametech.com/' },],
    frontline: false,
    ignoreIndex: true,
    title:
      "Tutorials by Jonathan Capes",
  },
  siteMetadata: {
    title: 'Tutorials by Jonathan Capes',
    description: 'Documentation built with mdx.',
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
      background_color: '#67459B',
      theme_color: '#67459B',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/ly_512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

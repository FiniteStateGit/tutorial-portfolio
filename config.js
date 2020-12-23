const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: 'https://tutorial-portfolio.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: "",
    logoLink: '',
    title:
      "",
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
      '/', // add trailing slash if enabled above
      '/01-popups',
      '/02-cursor-raycast',
      '/03-ui-draggables'
    ],
    collapsedNav: [

    ],
    links: [
            { text: 'Lumberyard Welcome Guide', link: 'https://docs.aws.amazon.com/lumberyard/latest/welcomeguide/index.html' },
            { text: 'Lumberyard User Guide', link: 'https://docs.aws.amazon.com/lumberyard/latest/userguide/index.html' },
            { text: 'Lumberyard Official Tutorials', link: 'https://docs.aws.amazon.com/lumberyard/latest/tutorials/index.html' },
            { text: 'Lumberyard API Reference', link: 'https://docs.aws.amazon.com/lumberyard/latest/apireference/index.html' },
            { text: 'Lumberyard Developer Forums', link: 'https://forums.awsgametech.com/' },],
    frontline: false,
    ignoreIndex: false,
    title:
      "Lumberyard Tutorials by Jonathan Capes",
  },
  siteMetadata: {
    title: 'Lumberyard Tutorials by Jonathan Capes',
    description: 'Lumberyard Tutorials by Jonathan Capes',
    ogImage: null,
    docsLocation: 'https://github.com/FiniteStateGit/tutorial-portfolio/tree/master/content',
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
    },
  },
};

module.exports = config;

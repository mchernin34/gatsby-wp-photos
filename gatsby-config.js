module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'https://mchernin34.wordpress.com/',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: 'CLIENT SECRET',
          wpcom_app_clientId: 'CLIENT ID',
          wpcom_user: 'USERNAME',
          wpcom_pass: 'PASSWORD'
        },
        verboseOutput: false
      }
    }
  ]
}

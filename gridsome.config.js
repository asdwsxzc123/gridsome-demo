// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config


// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://3354020n4h.wicp.vip/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog', 'follewer', 'followering', 'project'],
        singleTypes: ['user-info'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],
}

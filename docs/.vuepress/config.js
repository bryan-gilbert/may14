const path = require("path");

module.exports = {
  title: 'Docker and small scale production ready apps',
  description: 'As a developer you want to setup your solution for both development and production',
  base: "/may14/",
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stage1', link: '/stage1/' },
    ],
    sidebar: [
      {
        title: 'Project',
        children: [
          '/'
        ]
      },
      {
        title: 'Stage1',
        children: [
          '/stage1/',
          '/stage1/server'
        ]
      }
    ]
  }
}

const path = require("path");

module.exports = {
  title: 'Docker and small scale production ready apps',
  description: 'As a developer you want to setup your solution for both development and production',
  base: "/may14/",
  port: 8081,
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stage1', link: '/stage1/' },
      { text: 'Stage2', link: '/stage2/' },
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
          '/stage1/server.md'
        ]
      },
      {
        title: 'Stage2',
        children: [
          '/stage2/',
          '/stage2/2.client',
          '/stage2/3.deploy',
          '/stage2/4.scripts'
        ]
      }
    ]
  }
}

module.exports = {
  title: "VuePress Blog Example",
  description: "This is a blog example built by VuePress",
  theme: require.resolve("../../"),
  themeConfig: {
    summary: true,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house"
      },
      {
        text: "Projects",
        link: "/projects/",
      }
    ],
    sitemap: true, // enables sitemap plugin
    hostname: "https://ahmadmostafa.com/", // required for sitemap
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    googleAnalytics: "", // Google Analytics tracking ID
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by"
        },
        {
          type: "instagram",
          link: "#"
        },
        {
          type: "linkedin",
          link: "#"
        },
        {
          type: "twitter",
          link: "#"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: ""
        }
      ]
    }
  }
};

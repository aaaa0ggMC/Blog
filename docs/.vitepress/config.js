const base = "/Blog/"
export default {
  base,
  title: "aaaa0ggmc's blog",
  description:"记住生活 Forget me Not(勿忘我)",

  head:[
    ["link",{rel:"icon",href:'${base}favicon.ico'}],
  ],

  themeConfig:{
    nav:[
      {text:'About',link:'/about'},
    ],
    sidebar:{
      "/about":{
        text:"About Me",
        items:[
          {text:"High School",link:"/about/highschool"}
        ]
      }
    },
    docFooter:{
      prev:"上一篇",
      next:"下一篇",
    }
  },
};

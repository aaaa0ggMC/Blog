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
      {text:'学海无涯',link:'/keep_learning'},
      {text:'长路漫漫',link:'/keep_exploring'},
      {text:'关于',link:'/about'},
    ],
    sidebar:{
      "/about":{
        text:"About Me",
        items:[
          {text:"AboutMe",link:"/about#aboutme",items:[
            {text:"个人介绍",link:"/about#self_intro",items:[
              {text:"2025/1/30",link:"/about/#intro_2025_1_30"}
            ]}
          ]},
          {text:"高中生活",link:"/about/high_school"},
          {text:"学到的东西",link:"/about/skills"}
        ]
      }
    },
    docFooter:{
      prev:"上一篇",
      next:"下一篇",
    }
  },
  transformHead({ assets }) {
    const myFont = assets.find(file => /canger.ttf/);
    if(myFont){
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFont,
            as: 'font',
            type: 'font/truetype',
            crossorigin: ''
          }
        ]
      ]
    }
  }
};

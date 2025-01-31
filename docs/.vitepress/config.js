const base = "/Blog/"
export default {
  base,
  title: "aaaa0ggmc's blog",
  description:"记住生活 Forget me Not(勿忘我)",
  ignoreDeadLinks: true,

  head:[
    ["link",{rel:"icon",href:'${base}favicon.ico'}],
  ],

  themeConfig:{
    footer: {
      message: "Developed by aaaa0ggmc",
      //copyright: ""
    },
    nav:[
      {text:'学海无涯',link:'/keep_learning'},
      {text:'游戏人生',link:'/gaming_life'},
      {text:'长路漫漫',link:'/keep_exploring'},
      {text:'随笔',link:'/writings'},
      {text:'探险',link:'/exploration'},
      {text:'关于',link:'/about'},
    ],
    sidebar:{
      "/exploration":[
        {text:"探险",link:"/exploration/"},
        {text:"自在、独行",link:"/exploration/2025.1.1"},
      ],
      "/writings":[
        {text:"随笔",link:"/writings/"},
        {text:"勿忘我",link:"/writings/forget_me_not",items:[
            {text:"--Vol.III",link:"/writings/fmn_vol_3"},
        ]},
        {text:"Are You ⬜⬜⬜⬜",link:"/writings/are_you_____"},
      ],
      "/keep_learning":{
          text:"Keep Learning",
          items:[
            {text:"Keep Learning",link:"/keep_learning/"},
            {text:"读书笔记",link:"/keep_learning/reading"},
            {text:"C/C++学习",link:"/keep_learning/c_c++"},
            {text:"其他语言的学习",link:"/keep_learning/other_langs"},
            {text:"Linux的学习",link:"/keep_learning/archlinux"},
          ],
          link:"/keep_learning/"
      },
      "/about":{
        text:"About Me",
        items:[
          {text:"AboutMe",link:"/about#aboutme",items:[
          ]},
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

import { base } from './scripts/Data.ts';
import { defineConfig } from 'vitepress';

export default defineConfig({
  markdown: {
    math: true,
    lineNumbers: true,
  },base,
  title: "aaaa0ggmc's blog",
  description:"记住生活 Forget me Not(勿忘我)",
  ignoreDeadLinks: true,

  head:[
    ["link",{rel:"icon",href:'/Blog/favicon.ico'}],
  ],

  themeConfig:{
    footer: {
      message: "Developed by aaaa0ggmc"
    },
    search: {
      provider: 'local'
    },
    nav:[
      {text:'UnlimitedLifeDoc',link:'https://aaaa0ggmc.github.io/UnlimitedLife-Linux/ULDoc/'},
      {text:'学海无涯',link:'/keep_learning'},
      {text:'游戏人生',link:'/gaming_life'},
      {text:'随笔',link:'/writings'},
      {text:'探险',link:'/exploration'},
      {text:'杂项',link:'/others'},
      {text:'关于',link:'/about'},
      {text:'设置',link:'/settings'},
    ],
    sidebar:{
      "/gaming_life":[
        {text:"游戏人生",link:"/gaming_life"},
        {text:"3C3U历险记",link:"/3c3u"},
      ],
      "/gaming_life/3c3u":[

      ],
      "/exploration":[
        {text:"探险",link:"/exploration/"},
        {text:"自在、独行",link:"/exploration/2025.1.1"},
      ],
      "/writings":[
        {text:"随笔",link:"/writings/"},
        {text:"勿忘我",collapsed: true,link:"/writings/forget_me_not",items:[
            {text:"--Vol.I",collapsed: true,items:[
              {text:"Day1:Hypixel & Unturned",link:"/writings/fmn_vol_1_day1.md"},
              {text:"Day2:Mein Kampf in 3C3U",link:"/writings/fmn_vol_1_day2.md"},
              {text:"Day3:Configuring Kali Linux",link:"/writings/fmn_vol_1_day3.md"},
              {text:"Day4:Windows Launcher & Toolkit",link:"/writings/fmn_vol_1_day4.md"},
              {text:"Day5:Drawing",link:"/writings/fmn_vol_1_day5.md"},
              {text:"Day6:Music",link:"/writings/fmn_vol_1_day6.md"},
              {text:"Day7:Explore",link:"/writings/fmn_vol_1_day7.md"},
            ]},
            {text:"--Vol.III",collapsed: true,link:"/writings/fmn_vol_3"},
        ]},
        {text:"Are You 口口口口",link:"/writings/are_you_____"},
        {text:"纪梦",link:"/writings/dreams"},
      ],
      "/keep_learning":{
          text:"Keep Learning",
          collapsed: true,
          items:[
            {text:"Keep Learning",link:"/keep_learning/"},
            {text:"读书笔记",link:"/keep_learning/reading"},
            {text:"编程生涯记录",link:"/keep_learning/coding_life"},
            {text:"C/C++学习",link:"/keep_learning/c_c++"},
            {text:"其他语言的学习",link:"/keep_learning/other_langs"},
            {text:"Linux的学习",link:"/keep_learning/archlinux"},
            {text:"主科思考",link:"/keep_learning/study"},
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
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    outlineTitle: '目录',
    lastUpdatedText: '最后更新于',
    lastUpdated: true,
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
});

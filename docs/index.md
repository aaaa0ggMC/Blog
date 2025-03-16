---
layout: home

hero:
  name: <span class='blog_title' >aaaa0ggmc的博客</span>
  text: <span class='dynamic_text fixedSize' content='Dip into the world deeper...'>Dip into the world deeper...</span>
  tagline: C++ OpenGL ArchLinux 摄影 旅行
  image:
    src: /logo.png
    alt: logo
  actions:
    - theme: brand
      text: Get Started
      link:  /keep_learning
    - theme: alt
      text: About Me
      link:  /about
    - theme: alt
      text: View on GitHub
      link: https://github.com/aaaa0ggMC
features:
  - icon: 🧑‍💻
    title: Coding
    details: 编程生涯记录
    link: /keep_learning/c_c++
  - icon: 🙀
    title: ArchLinux
    details: 我的ArchLinux折腾记录
    link: /keep_learning/archlinux
  - icon: 😎
    title: Exploration
    details: 我的探险
    link: /exploration/
  - icon: 🤔
    title: Thinkings
    details: 我的各种思考
    link: /writings/
  - icon: 😋
    title: Gaming
    link: /gaming_life/
  - icon: 📚
    title: Study
    details: 我在主要科目学习上的思考
    link: /keep_learning/study
---

<style>
.waves {
    pointer-events: none;
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    max-height: 150px;
}

.parallax > use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}
.parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}
.parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}
.parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}
.parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}
@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
}
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }
}
</style>

<div id='page_id'>home</div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(200, 200, 255, 0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(200, 200, 255, 0.2)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(200, 200, 255, 0.1)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#ccccff44" />
    </g>
</svg>

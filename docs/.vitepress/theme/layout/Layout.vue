<!-- .vitepress/theme/Layout.vue -->
<template>
  <!-- 添加动态类名绑定 -->
  <div :class="{ 'home-theme': isHomePage }">
    <Layout>
      <template #doc-footer-before></template>
      <template #doc-after>
        <div style="margin-top: 24px">
          <Giscus
            :key="page.filePath"
            repo="aaaa0ggMC/Blog"
            repo-id="R_kgDONx0ynQ"
            category="Announcements"
            category-id="DIC_kwDONx0ync4CmgXp"
            mapping="url"
            strict="0"
            reactions-enabled="1"
            emit-metadata="0"
            input-position="top"
            lang="zh-CN"
            loading="lazy"
            crossorigin="anonymous"
            :theme="isDark ? 'dark' : 'light'"
          />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts" setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme-without-fonts";
import { watch, computed } from "vue";
import { inBrowser, useData, useRouter } from "vitepress";

const { isDark, page } = useData();
const router = useRouter();
const { Layout } = DefaultTheme;

// 计算当前是否为主页
const isHomePage = computed(() => {
  console.log(router.route.path === '/Blog/')
  return router.route.path === '/Blog/'
});

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");

  if (iframe) {
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
      "https://giscus.app"
    );
  } else {
    console.warn("Giscus iframe not found");
  }
});
</script>

<style>
/* 将原 :root 选择器改为 .home-theme */
.home-theme {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, orange 30%, red);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, orange 70%, yellow 30%);
  --vp-home-hero-image-filter: blur(44px);
  
  --vp-c-bg-alt: #7e9ecd;
  --vp-c-bg-elv: #7e9ecd;
  --vp-c-bg-soft: #bbbbff;
  --vp-c-bg: #aaaaff;
  --vp-c-text-1: black;
  --vp-c-text-2: #444444;
  --vp-c-text-3: white;
  --vp-c-border: transparent;
  --vp-c-divider: transparent;
  --vp-c-gutter: transparent;
  --vp-button-alt-bg: #7e9ecd;
  --vp-input-switch-bg-color: #7e9ecd;
  --vp-nav-bg-color: #7e9ecd;

  color:black !important;
}

/* 嵌套写法确保样式作用域 */
.home-theme .Layout {
  background-image: url(/back.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.home-theme .VPFooter {
  border-color: transparent !important;
  --vp-c-bg: transparent;
}

/* 修改媒体查询作用域 */
@media (min-width: 640px) {
  .home-theme {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  .home-theme {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
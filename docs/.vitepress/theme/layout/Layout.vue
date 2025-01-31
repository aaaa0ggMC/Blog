<!--Layout.vue-->
<template>
  <Layout>
    <template #doc-footer-before> </template>
    <template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="aaaa0ggMC/Blog"
          repo-id="R_kgDONx0ynQ"
          category="Announcements"
          category-id="DIC_kwDONx0ync4CmgXp"
          mapping="pathname"
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
</template>

<script lang="ts" setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme-without-fonts";
import { watch } from "vue";
import { inBrowser, useData } from "vitepress";

const { isDark, page } = useData();
const { Layout } = DefaultTheme;

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
<template>
  <div class="app">
    <!-- 导航栏 -->
    <Nav />
    
    <!-- 轮播Banner -->
    <Banner />
    
    <!-- 关于我们 -->
    <About />
    
    <!-- 服务 -->
    <Service />
    
    <!-- 联系我们 -->
    <Contact />
    
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

/* 移除默认链接样式 */
a {
  text-decoration: none;
  color: inherit;
}

/* 移除默认列表样式 */
ul, ol {
  list-style: none;
}

/* 移除默认按钮样式 */
button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}

/* 移除默认输入框样式 */
input, textarea {
  font-family: inherit;
}

/* 确保页面无横向滚动 */
html, body {
  overflow-x: hidden;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}
</style>

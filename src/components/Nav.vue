<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a href="#">
          <h1>爱自己</h1>
        </a>
      </div>
      
      <!-- 桌面端导航 -->
      <ul class="navbar-nav" v-if="!isMobileMenuOpen">
        <li><a href="#">首页</a></li>
        <li><a href="#about">关于我们</a></li>
        <li><a href="#service">服务</a></li>
        <li><a href="#contact">联系我们</a></li>
      </ul>
      
      <!-- 移动端汉堡菜单按钮 -->
      <button class="menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <!-- 移动端导航菜单 -->
      <div class="mobile-menu" v-if="isMobileMenuOpen">
        <ul>
          <li><a href="#" @click="toggleMobileMenu">首页</a></li>
          <li><a href="#about" @click="toggleMobileMenu">关于我们</a></li>
          <li><a href="#service" @click="toggleMobileMenu">服务</a></li>
          <li><a href="#contact" @click="toggleMobileMenu">联系我们</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 监听窗口大小变化
const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.navbar-brand h1 {
  font-size: 24px;
  font-weight: bold;
  color: #1e40af;
  margin: 0;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  margin-left: 30px;
}

.navbar-nav a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-nav a:hover {
  color: #1e40af;
}

/* 移动端菜单按钮 */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-toggle span {
  width: 30px;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* 移动端菜单 */
.mobile-menu {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.3s ease;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 20px 0;
}

.mobile-menu li {
  padding: 10px 20px;
}

.mobile-menu a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  display: block;
  transition: color 0.3s ease;
}

.mobile-menu a:hover {
  color: #1e40af;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar-nav {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
}
</style>
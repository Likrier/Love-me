<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <h3>企业名称</h3>
          <p>我们致力于为客户提供高质量的服务，帮助企业实现数字化转型，创造更大的价值。</p>
          <div class="social-links">
            <a href="#" class="social-link">微信</a>
            <a href="#" class="social-link">微博</a>
            <a href="#" class="social-link"> LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>快速链接</h4>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#service">服务</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>联系我们</h4>
          <ul>
            <li>📞 400-123-4567</li>
            <li>📧 contact@example.com</li>
            <li>📍 北京市朝阳区某某大厦1001室</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 企业名称. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 组合式API，无需额外逻辑
</script>

<style scoped>
.footer {
  background-color: #1e40af;
  color: white;
  padding: 60px 0 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-about {
  flex: 1;
  min-width: 300px;
}

.footer-about h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-about p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  display: inline-block;
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-links,
.footer-contact {
  flex: 1;
  min-width: 200px;
}

.footer-links h4,
.footer-contact h4 {
  font-size: 18px;
  margin-bottom: 20px;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.footer-contact li {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
}

.footer-bottom p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .footer-about,
  .footer-links,
  .footer-contact {
    flex: 100%;
  }
}
</style>
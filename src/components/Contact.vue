<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-title">
        <h2>联系我们</h2>
        <div class="divider"></div>
        <p>如有任何问题，欢迎随时与我们联系</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <h3>📞 电话</h3>
            <p>400-123-4567</p>
          </div>
          <div class="info-item">
            <h3>📧 邮箱</h3>
            <p>contact@example.com</p>
          </div>
          <div class="info-item">
            <h3>📍 地址</h3>
            <p>北京市朝阳区某某大厦1001室</p>
          </div>
          <div class="info-item">
            <h3>⏰ 工作时间</h3>
            <p>周一至周五 9:00-18:00</p>
          </div>
        </div>
        
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" placeholder="姓名" v-model="formData.name" required />
            </div>
            <div class="form-group">
              <input type="email" placeholder="邮箱" v-model="formData.email" required />
            </div>
            <div class="form-group">
              <input type="tel" placeholder="电话" v-model="formData.phone" required />
            </div>
            <div class="form-group">
              <textarea placeholder="留言" v-model="formData.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn" :disabled="isLoading">
              {{ isLoading ? '提交中...' : '提交' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import http from '../../server/http.js'

// 表单数据
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// 加载状态
const isLoading = ref(false)

// 处理表单提交
const handleSubmit = async () => {
  try {
    isLoading.value = true
    
    // 发送请求到后端接口
    const response = await http.post('/api/contact', formData.value)
    
    console.log('提交成功:', response)
    
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    
    // 提交成功提示
    alert('提交成功！我们会尽快与您联系。')
  } catch (error) {
    console.error('提交失败:', error)
    alert('提交失败，请稍后重试。')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.contact {
  padding: 100px 0;
  background-color: #f9fafb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 36px;
  color: #1e40af;
  margin-bottom: 20px;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #1e40af;
  margin: 0 auto 20px;
}

.section-title p {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.info-item {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.info-item h3 {
  font-size: 18px;
  color: #1e40af;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.contact-form {
  flex: 1;
  min-width: 300px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.btn {
  width: 100%;
  padding: 15px;
  background-color: #1e40af;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #1e3a8a;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .contact-content {
    flex-direction: column;
  }
  
  .contact-info,
  .contact-form {
    flex: 100%;
  }
}
</style>
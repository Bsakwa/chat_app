<template>
  <section class="features-section py-12 bg-gray-100" data-aos="fade-up" data-aos-duration="1000" id="features">
    <h2 class="text-3xl font-bold text-center mb-8">Features</h2>
    <div class="flex flex-wrap justify-center">
      <div 
        v-for="(feature, index) in features" 
        :key="index" 
        class="feature-item flex flex-col items-center w-60 m-4 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
        data-aos="flip-left" 
        data-aos-duration="500" 
        :data-aos-delay="index * 100"
      >
        <i :class="feature.icon + ' text-4xl mb-4'" :style="{ color: feature.color }"></i>
        <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
        <p class="text-gray-600 text-center">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { title: 'Real-Time Messaging', description: 'Chat with anyone in real time.', icon: 'fas fa-comments', color: '#3B82F6' }, // blue
        { title: 'File Sharing', description: 'Share files quickly and easily.', icon: 'fas fa-paperclip', color: '#FBBF24' }, // yellow
        { title: 'Secure Encryption', description: 'Your conversations are safe and secure.', icon: 'fas fa-lock', color: '#F43F5E' }, // red
        { title: 'Group Chats', description: 'Create groups and chat with multiple people.', icon: 'fas fa-users', color: '#4ADE80' }, // green
        { title: 'Custom Themes', description: 'Personalize your chat experience.', icon: 'fas fa-paint-brush', color: '#9333EA' }, // purple
        { title: 'Push Notifications', description: 'Stay updated with real-time notifications.', icon: 'fas fa-bell', color: '#FB7185' }, // pink
      ]
    };
  }
}
</script>

<style scoped>
.features-section {
  /* No custom styles needed as Tailwind is used */
}
</style>


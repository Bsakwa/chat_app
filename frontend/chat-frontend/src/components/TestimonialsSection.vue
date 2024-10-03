<template>
  <section class="testimonials py-20" id="testimonials">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">What Our Users Say</h2>
      <swiper 
        :modules="modules"
        :slides-per-view="1" 
        :space-between="30" 
        :navigation="true"
        :loop="true"  
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false
        }"
        class="mySwiper"
      >
        <swiper-slide 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="px-4"
        >
          <div class="testimonial-item p-6 mx-auto" style="max-width: 400px;"> <!-- Set max-width here -->
            <img 
              :src="testimonial.picture" 
              :alt="`${testimonial.name}'s picture`" 
              class="w-16 h-16 rounded-full mx-auto mb-4"
            >
            <p class="mb-4 text-gray-700">"{{ testimonial.comment }}"</p>
            <p class="font-semibold text-gray-900">- {{ testimonial.name }}</p>
            <div class="flex justify-center mt-2">
              <i class="fas fa-star text-yellow-500" v-for="star in 5" :key="star"></i>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name: 'TestimonialsSection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      testimonials: [
        { 
          name: "John Doe", 
          comment: "ChatApp has transformed the way I communicate with my friends and family! The interface is so intuitive, and I can share images and videos seamlessly. It's incredibly reliable and the real-time messaging feature is a game-changer. Highly recommended!", 
          picture: "https://randomuser.me/api/portraits/men/1.jpg" 
        },
        { 
          name: "Jane Smith", 
          comment: "I absolutely love using ChatApp! The end-to-end encryption gives me peace of mind when I chat, knowing that my conversations are private. Plus, the speed is unbelievable! I can message my coworkers without any delays, even when they’re halfway across the world.", 
          picture: "https://randomuser.me/api/portraits/women/1.jpg" 
        },
        { 
          name: "Alice Johnson", 
          comment: "As a digital nomad, ChatApp is my go-to messaging platform. I can connect with clients and collaborators no matter where I am. The group chat feature allows me to easily manage projects and keep everyone in the loop. I can’t imagine my work life without it!", 
          picture: "https://randomuser.me/api/portraits/women/2.jpg" 
        },
        { 
          name: "Bob Brown", 
          comment: "ChatApp exceeded my expectations! The user interface is sleek and user-friendly, making it easy to find my way around. I love the ability to customize my chats with themes and stickers. It adds a fun element to my daily conversations. Definitely coming back for more!", 
          picture: "https://randomuser.me/api/portraits/men/2.jpg" 
        }
      ]
    };
  }
}
</script>

<style scoped>
.testimonial-item {
  transition: transform 0.2s;
}
.testimonial-item:hover {
  transform: scale(1.05);
}

/* Custom styles for Swiper navigation */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #000;
}
</style>


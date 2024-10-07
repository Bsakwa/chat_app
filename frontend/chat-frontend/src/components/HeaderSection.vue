<template>
  <header class="bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4">
      <div class="flex items-center space-x-4">
        <img src="logo.png" alt="ChatApp Logo" class="w-12 h-12" />
        <h1 class="text-3xl font-bold text-blue-600">ChatApp</h1>
      </div>
      <nav class="flex items-center space-x-6">
        <ul class="flex space-x-6">
          <li><a href="#features" class="text-gray-700 hover:text-blue-600 transition">Features</a></li>
          <li><a href="#testimonials" class="text-gray-700 hover:text-blue-600 transition">Testimonials</a></li>
          <li><a href="#pricing" class="text-gray-700 hover:text-blue-600 transition">Pricing</a></li>
          <li><a href="#contact" class="text-gray-700 hover:text-blue-600 transition">Contact Us</a></li>
        </ul>
        <button @click="openModal" class="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
          Sign in
        </button>
      </nav>
    </div>

    <!-- Sign-In Modal -->
    <SignInModal :showModal="isModalOpen" @close="closeModal" />
  </header>
</template>

<script>
import SignInModal from './SignInModal.vue'; // Import the modal

export default {
  name: 'HeaderSection',
  components: {
    SignInModal
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>


<template>
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="closeModal">
      <!-- Modal with grey background -->
      <div class="bg-white w-full max-w-md p-8 rounded-lg shadow-lg relative transform transition-all ease-out duration-300">
        <!-- Close Icon -->
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition">
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- Modal Header -->
        <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

        <!-- Email and Password form -->
        <form @submit.prevent="signInWithEmail" class="space-y-5">
          <!-- Email field -->
          <div class="relative">
            <input
              v-model="email"
              type="email"
              class="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <i class="fas fa-envelope absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
          </div>

          <!-- Password field with toggle visibility -->
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              class="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <i class="fas fa-lock absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
            <button type="button" @click="togglePassword" class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>

          <!-- Sign In button -->
          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Sign in with Email
          </button>
        </form>

        <!-- "OR" separator -->
        <div class="flex items-center justify-center my-6">
          <hr class="w-1/4 border-gray-300" />
          <span class="px-3 text-gray-500">or</span>
          <hr class="w-1/4 border-gray-300" />
        </div>

        <!-- Google and Microsoft buttons -->
        <div class="space-y-4">
          <button @click="signInWithGoogle" class="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
            <i class="fab fa-google mr-2 text-red-500"></i> Sign in with Google
          </button>
          <button @click="signInWithMicrosoft" class="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
            <i class="fab fa-microsoft mr-2 text-blue-600"></i> Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SignInModal',
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      email: '',
      password: '',
      showPassword: true, // To toggle password visibility
    };
  },
  methods: {
    signInWithGoogle() {
      // Logic to handle Google Sign-In
      console.log('Google Sign-In clicked');
    },
    signInWithMicrosoft() {
      // Logic to handle Microsoft Sign-In
      console.log('Microsoft Sign-In clicked');
    },
    signInWithEmail() {
      // Logic to handle Email & Password Sign-In
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    },
    closeModal() {
      this.$emit('close');
    },
    togglePassword() {
      this.showPassword = !this.showPassword; // Toggle between text and password
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

input::placeholder {
  color: #9ca3af; /* Tailwind's Gray-400 */
}

input:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* Blue focus outline */
}
</style>


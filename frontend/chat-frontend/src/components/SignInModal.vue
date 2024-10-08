<template>
  <transition name="fade">
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative transform transition-all ease-out duration-300">
        <!-- Close Icon -->
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Modal Header -->
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
          {{ isResetMode ? 'Reset Password' : 'Welcome Back' }}
        </h2>

        <!-- Sign In Form -->
        <form v-if="!isResetMode" @submit.prevent="signInWithEmail" class="space-y-6">
          <!-- Email field -->
          <div class="relative">
            <label for="email" class="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
            <input
              v-model="email"
              id="email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <!-- Password field with toggle visibility -->
          <div class="relative">
            <label for="password" class="text-sm font-medium text-gray-700 mb-1 block">Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              id="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button type="button" @click="togglePassword" class="absolute top-9 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'hidden': !showPassword, 'block': showPassword}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{'block': !showPassword, 'hidden': showPassword}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
          </div>

          <!-- Sign In button -->
          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg shadow-md hover:shadow-lg">
            Sign In
          </button>
        </form>

        <!-- Password Reset Form -->
        <form v-else @submit.prevent="resetPassword" class="space-y-6">
          <div class="relative">
            <label for="reset-email" class="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
            <input
              v-model="resetEmail"
              id="reset-email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg shadow-md hover:shadow-lg">
            Reset Password
          </button>
        </form>

        <!-- "OR" separator -->
        <div v-if="!isResetMode" class="flex items-center my-6">
          <hr class="flex-grow border-gray-300" />
          <span class="px-4 text-gray-500 text-sm">or continue with</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        <!-- Google and Microsoft buttons -->
        <div v-if="!isResetMode" class="space-y-4">
          <button @click="signInWithGoogle" class="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition duration-300 font-semibold shadow-sm hover:shadow">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button @click="signInWithMicrosoft" class="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition duration-300 font-semibold shadow-sm hover:shadow">
            <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
              <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
              <path fill="#f35325" d="M1 1h10v10H1z"/>
              <path fill="#81bc06" d="M12 1h10v10H12z"/>
              <path fill="#05a6f0" d="M1 12h10v10H1z"/>
              <path fill="#ffba08" d="M12 12h10v10H12z"/>
            </svg>
            Microsoft
          </button>
        </div>

        <!-- Forgot password link / Back to sign in -->
        <div class="text-center mt-6">
          <a href="#" @click.prevent="toggleResetMode" class="text-sm text-blue-600 hover:underline">
            {{ isResetMode ? 'Back to Sign In' : 'Forgot your password?' }}
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ImprovedSignInModal',
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
      resetEmail: '',
      showPassword: false,
      isResetMode: false,
    };
  },
  methods: {
    signInWithGoogle() {
      console.log('Google Sign-In clicked');
    },
    signInWithMicrosoft() {
      console.log('Microsoft Sign-In clicked');
    },
    signInWithEmail() {
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    },
    closeModal() {
      this.$emit('close');
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleResetMode() {
      this.isResetMode = !this.isResetMode;
      if (this.isResetMode) {
        this.resetEmail = this.email;
      }
    },
    resetPassword() {
      console.log(`Password reset requested for email: ${this.resetEmail}`);
      // Here you would typically call an API to handle the password reset
      alert(`Password reset link sent to ${this.resetEmail}`);
      this.toggleResetMode(); // Switch back to sign-in mode
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
</style>

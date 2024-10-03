<template>
  <section class="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-indigo-800/50"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Left Section -->
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6" v-motion-slide-visible-once-bottom>
            Welcome to ChatApp
          </h1>
          <p class="text-xl mb-8 text-blue-100" v-motion-slide-visible-once-bottom>
            Connect with friends in real-time, anytime, anywhere. Experience secure messaging with unlimited possibilities.
          </p>
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4" v-motion-slide-visible-once-bottom>
            <a
              href="#pricing"
              class="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold transition-all hover:bg-blue-100 hover:scale-105 transform shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#demo"
              class="bg-blue-500 bg-opacity-20 text-white py-3 px-8 rounded-full font-semibold transition-all hover:bg-opacity-30 hover:scale-105 transform shadow-lg"
            >
              Watch Demo
            </a>
          </div>
          <!-- Features Section -->
          <div class="mt-12 flex justify-center space-x-8" v-motion-slide-visible-once-bottom>
            <div class="feature-item flex items-center">
              <i class="fas fa-comment-alt w-8 h-8 mr-3 text-blue-300"></i>
              <span class="text-lg">Real-time Chat</span>
            </div>
            <div class="feature-item flex items-center">
              <i class="fas fa-shield-alt w-8 h-8 mr-3 text-blue-300"></i>
              <span class="text-lg">End-to-End Encryption</span>
            </div>
            <div class="feature-item flex items-center">
              <i class="fas fa-bolt w-8 h-8 mr-3 text-blue-300"></i>
              <span class="text-lg">Lightning Fast</span>
            </div>
          </div>
        </div>
        <!-- Chat Section -->
        <div class="lg:w-1/2 mt-12 lg:mt-0" v-motion-pop-visible-once>
          <div class="bg-white rounded-lg p-6 shadow-xl">
            <div class="chat-container w-full max-w-3xl mx-auto min-h-[350px] bg-gray-100 rounded-lg p-4">
              <TransitionGroup name="fade">
                <div
                  v-for="(message, index) in chatMessages"
                  :key="index"
                  class="flex items-start mb-4 transition-transform"
                  :class="{ 'justify-start': message.user.name === 'Alex', 'justify-end': message.user.name === 'Sam' }"
                >
                  <img
                    v-if="message.user.name === 'Alex'"
                    :src="message.user.picture"
                    :alt="message.user.name"
                    class="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                  />
                  <div
                    class="mx-2 p-3 rounded-lg"
                    :class="{
                      'bg-blue-500 text-white': message.user.name === 'Alex',
                      'bg-white text-gray-800 shadow-md': message.user.name === 'Sam'
                    }"
                  >
                    <p class="text-sm">{{ message.text }}</p>
                  </div>
                  <img
                    v-if="message.user.name === 'Sam'"
                    :src="message.user.picture"
                    :alt="message.user.name"
                    class="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                  />
                </div>
              </TransitionGroup>
            </div>
            <div class="mt-4 flex items-center bg-gray-200 p-2 rounded-full">
              <i class="fas fa-smile text-gray-600 cursor-pointer mx-2" title="Emoji"></i>
              <i class="fas fa-paperclip text-gray-600 cursor-pointer mx-2" title="Attachment"></i>
              <i class="fas fa-camera text-gray-600 cursor-pointer mx-2" title="Camera"></i>
              <input
                type="text"
                placeholder="Type a message..."
                class="flex-grow bg-white bg-opacity-20 text-white placeholder-blue-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button class="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors shadow-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fadeVisible, fadeVisibleOnce } from '@vueuse/motion';

export default {
  name: 'HeroSection',
  directives: {
    'motion-slide-visible-once-bottom': fadeVisibleOnce,
    'motion-pop-visible-once': fadeVisible,
  },
  setup() {
    const chatMessages = ref([]);
    const messageIndex = ref(0);
    const users = ref([
      {
        name: 'Alex',
        picture: '',
        messages: [
          "Hey there! How's it going?",
          "I just started using ChatApp. It's amazing!",
          "The real-time messaging is so smooth.",
        ]
      },
      {
        name: 'Sam',
        picture: '',
        messages: [
          "Hi Alex! I'm doing great, thanks!",
          "That's awesome! I've been using it for a while now.",
          "Absolutely! And the encryption makes me feel secure.",
        ]
      }
    ]);

    const fetchRandomUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=2');
        const data = await response.json();
        users.value[0].picture = data.results[0].picture.medium;
        users.value[1].picture = data.results[1].picture.medium;
      } catch (error) {
        console.error('Error fetching random users:', error);
        // Fallback to placeholder images if the API call fails
        users.value[0].picture = '/api/placeholder/64/64';
        users.value[1].picture = '/api/placeholder/64/64';
      }
    };

    const startChat = () => {
      chatMessages.value.push({
        user: users.value[0],
        text: users.value[0].messages[0]
      });
      messageIndex.value++;
      sendMessageWithDelay();
    };

    const sendMessageWithDelay = () => {
      const alexMessagesSent = chatMessages.value.filter(msg => msg.user.name === 'Alex').length;
      const samMessagesSent = chatMessages.value.filter(msg => msg.user.name === 'Sam').length;

      if (alexMessagesSent < 3 && samMessagesSent < 3) {
        setTimeout(() => {
          const userIndex = messageIndex.value % 2;
          const currentUser = users.value[userIndex];
          const messageText = currentUser.messages[Math.floor(messageIndex.value / 2)];
          
          if (messageText) {
            chatMessages.value.push({
              user: currentUser,
              text: messageText
            });
            messageIndex.value++;
            sendMessageWithDelay();
          }
        }, 2000);
      }
    };

    onMounted(async () => {
      await fetchRandomUsers();
      startChat();
    });

    return {
      chatMessages,
      users
    };
  }
};
</script>

<style scoped>
.feature-item {
  display: flex;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>


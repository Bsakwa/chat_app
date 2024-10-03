import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';

// Import AOS (Animate On Scroll)
import 'aos/dist/aos.css';
import AOS from 'aos';

// Initialize AOS
AOS.init();

const app = createApp(App);
app.use(router); // Use the router
app.mount('#app'); // Mount the app

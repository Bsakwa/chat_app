<template>
  <footer class="footer bg-blue-900 text-white py-12" id="contact">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- About Section -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">About ChatApp</h4>
        <p>ChatApp is your trusted messaging platform, providing secure and real-time communication for individuals and teams.</p>
      </div>

      <!-- Quick Links -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">Quick Links</h4>
        <ul>
          <li><a href="#features" class="hover:text-gray-300">Features</a></li>
          <li><a href="#testimonials" class="hover:text-gray-300">Testimonials</a></li>
          <li><a href="#pricing" class="hover:text-gray-300">Pricing</a></li>
          <li><a href="#contact" class="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>

      <!-- Resources Section -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">Resources</h4>
        <ul>
          <li><a href="#" class="hover:text-gray-300">Help Center</a></li>
          <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" class="hover:text-gray-300">Security</a></li>
        </ul>
      </div>

      <!-- Contact & Social Media -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">Contact Us</h4>
        <p>Email: <a href="mailto:support@chatapp.com" class="hover:text-gray-300">support@chatapp.com</a></p>
        <p>Phone: <a href="tel:+1234567890" class="hover:text-gray-300">+123-456-7890</a></p>
        <p>Location: 123 ChatApp St, Communication City</p>
        <div class="mt-4 flex space-x-4">
          <a href="#" class="hover:text-gray-300 text-2xl"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-gray-300 text-2xl"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-gray-300 text-2xl"><i class="fab fa-instagram"></i></a>
          <a href="#" class="hover:text-gray-300 text-2xl"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>

    <!-- Newsletter & Map -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <!-- Newsletter -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">Stay Updated</h4>
        <p>Subscribe to our newsletter for the latest news and updates.</p>
        <form class="flex mt-4">
          <input 
            type="email" 
            class="w-full p-2 rounded-l-lg focus:outline-none" 
            placeholder="Enter your email address"
          />
          <button class="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
        </form>
      </div>

      <!-- Location/Map Embed -->
      <div class="mb-8">
        <h4 class="text-2xl font-semibold mb-4">Our Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3154!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c40f2f03b%3A0x2b5767b3eb1b21c!2sCommunication%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1611019175205!5m2!1sen!2sus"
          width="100%"
          height="200"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center mt-8">
      <p>&copy; 2024 ChatApp. All rights reserved. <a href="#" class="hover:text-gray-300">Privacy Policy</a> | <a href="#" class="hover:text-gray-300">Terms of Service</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer a {
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #e2e8f0; /* Lighter hover effect for better contrast */
}
</style>

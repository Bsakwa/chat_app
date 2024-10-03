<template>
  <div>
    <HeaderSection />
    <HeroSection :testimonials="testimonials" />
    <FeaturesSection /> <!-- Added FeaturesSection -->
    <TestimonialsSection :testimonials="testimonials" />
    <PricingSection :pricingPlans="pricingPlans" />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import HeroSection from './HeroSection.vue';
import FeaturesSection from './FeaturesSection.vue'; // Importing FeaturesSection
import TestimonialsSection from './TestimonialsSection.vue';
import PricingSection from './PricingSection.vue';
import FooterSection from './FooterSection.vue';

export default {
  components: {
    HeaderSection,
    HeroSection,
    FeaturesSection, // Registering FeaturesSection
    TestimonialsSection,
    PricingSection,
    FooterSection
  },
  data() {
    return {
      testimonials: [
        { name: 'John Doe', comment: 'This app is amazing!', picture: 'john.jpg' },
        { name: 'Jane Smith', comment: 'I love using ChatApp!', picture: 'jane.jpg' },
      ],
      pricingPlans: [
        { name: 'Free', price: '$0/month', description: 'Basic features to get you started.', features: ['Unlimited Messaging', 'Group Chats'] },
        { name: 'Pro', price: '$9.99/month', description: 'Advanced features for professionals.', features: ['Secure Messaging', 'Custom Themes', 'Priority Support'] },
      ]
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif; /* Apply Poppins font to the body */
}
</style>

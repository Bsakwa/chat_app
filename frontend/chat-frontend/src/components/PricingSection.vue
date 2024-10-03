<template>
  <section class="pricing py-20 bg-gray-100" id="pricing">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">Pricing</h2>
      <p class="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">Choose the plan that’s right for you.</p>
      <div class="flex flex-wrap justify-center">
        <div 
          class="pricing-item bg-white shadow-lg p-8 rounded-lg m-4 w-80 flex flex-col justify-between h-96 relative"
          v-for="(plan, index) in pricingPlans" 
          :key="index" 
          data-aos="fade-up" 
          :data-aos-delay="(index + 1) * 100"
        >
          <!-- Gold Badge for the most popular plan -->
          <div v-if="plan.popular" class="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg font-bold">Most Popular</div>

          <div>
            <h3 class="text-2xl font-semibold mb-2">{{ plan.name }}</h3>
            <span class="text-3xl font-bold">{{ plan.price }}</span>
            <p class="text-gray-600 mt-4">{{ plan.description }}</p>
            <ul class="text-gray-600 mt-4 text-left">
              <li v-for="(feature, index) in plan.features" :key="index" class="mb-2">
                <i class="fas fa-check text-green-500 mr-2"></i> {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Button always at the bottom -->
          <div class="mt-4">
            <a href="#" class="bg-blue-600 text-white py-2 px-4 rounded-full inline-block w-full text-center">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection',
  data() {
    return {
      pricingPlans: [
        {
          name: "Basic Plan",
          price: "$0/month",  // Basic plan is free
          description: "Perfect for individuals just starting out.",
          features: [
            "1:1 Messaging",
            "10 Channels",
            "Limited Emoji Reactions",
            "Basic Support"
          ],
          popular: false
        },
        {
          name: "Pro Plan",
          price: "$29/month",
          description: "Ideal for teams looking to enhance collaboration.",
          features: [
            "Group Messaging",
            "Unlimited Channels",
            "Custom Emoji Reactions",
            "File Sharing up to 100MB",
            "Priority Support"
          ],
          popular: true  // This plan will get the "Most Popular" badge
        },
        {
          name: "Enterprise Plan",
          price: "$99/month",
          description: "Designed for large organizations with advanced needs.",
          features: [
            "Unlimited Messaging",
            "Dedicated Channels for Teams",
            "File Sharing up to 1GB",
            "Data Encryption & Compliance",
            "24/7 Dedicated Support"
          ],
          popular: false
        }
      ]
    };
  }
}
</script>

<style scoped>
.pricing-item {
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 520px; /* Fixed height for consistent card size */
}

.pricing-item:hover {
  transform: scale(1.05);
}
</style>


<template>
  <checkout-page></checkout-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutPage from "@/components/Checkout/checkout.vue";
export default defineComponent({
  components: {
    CheckoutPage,
  },
  setup() {
    return {};
  },
});
</script>

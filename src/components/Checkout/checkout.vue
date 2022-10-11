<template>
  <div class="checkout">
    <div class="checkout--cards">
      <div class="card--one"></div>
      <div class="card--two"></div>
    </div>
    <div class="checkout--details">
      <CheckoutForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CheckoutForm from "./checkout-form.vue";

export default defineComponent({
  components: { CheckoutForm },
  setup() {
    return {};
  },
});
</script>

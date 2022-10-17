<template>
  <div class="checkout">
    <div class="checkout--cards">
      <div class="card--one">
        <div class="card--number">
          <input type="text" readonly v-model="card.cardNumber" />
        </div>
        <div class="p-details">
          <span>{{ card.cardHolderName }}</span>
          <span v-if="card.month && card.year"
            >{{ card.month }} / {{ card.year }}</span
          >
        </div>
      </div>
      <div class="card--two">
        <div class="input_wrapper">
          <input readonly type="text" v-model="card.cvc" />
        </div>
      </div>
    </div>
    <div class="checkout--details">
      <CheckoutForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CheckoutForm from "./checkout-form.vue";
import { useCard } from "@/composables/checkout.composable";

export default defineComponent({
  components: { CheckoutForm },
  setup() {
    let { card: card } = useCard();
    return { card };
  },
});
</script>

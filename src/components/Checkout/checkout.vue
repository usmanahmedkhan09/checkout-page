<template>
  <div class="checkout">
    <div class="checkout--cards">
      <div class="card--one">
        <div class="circles">
          <div class="first"></div>
          <div class="second"></div>
        </div>
        <div class="card--number">
          <label for="card-no" hidden></label>
          <input
            id="card-no"
            type="text"
            readonly
            v-model="card.cardNumber"
            placeholder="0000 0000 0000 0000"
          />
        </div>
        <div class="p-details">
          <span>{{ card.cardHolderName ?? "JANE APPLESEED" }}</span>
          <span>{{ card.month ?? "00" }} / {{ card.year ?? "00" }}</span>
        </div>
      </div>
      <div class="card--two">
        <label for="cvc" hidden></label>
        <input
          id="cvc"
          readonly
          type="text"
          v-model="card.cvc"
          placeholder="000"
        />
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

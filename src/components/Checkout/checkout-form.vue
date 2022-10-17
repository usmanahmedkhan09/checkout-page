<template>
  <form v-if="notSubmitted" @submit.prevent="submit()" class="checkout--form">
    <div class="form--input">
      <label for="name">CARDHOLDER NAME</label>
      <input
        id="name"
        type="text"
        placeholder="eg : Usman Ahmed"
        autocomplete="off"
        v-model="card.cardHolderName"
      />
      <div class="error-message" v-if="v$.cardHolderName.$error">
        {{ v$.cardHolderName.$errors[0].$message }}
      </div>
    </div>
    <div class="form--input">
      <label for="card number">CARD NUMBER</label>
      <input
        id="credit-cart-ex"
        type="text"
        autocomplete="off"
        v-model="card.cardNumber"
        placeholder="eg : 1234 6785 5634 0456"
        v-maska="'#### #### #### ####'"
      />
      <div class="error-message" v-if="v$.cardNumber.$error">
        {{ v$.cardNumber.$errors[0].$message }}
      </div>
    </div>
    <div class="date_wrapper">
      <div class="form--input">
        <label for="strat-date">EXP. DATE ( MM / YY )</label>
        <div class="input_wrapper">
          <div>
            <input
              id="start-date"
              type="text"
              autocomplete="off"
              placeholder="MM"
              v-model.number="card.month"
              max="2"
              min="2"
            />
            <div class="error-message" v-if="v$.month.$error">
              {{ v$.month.$errors[0].$message }}
            </div>
          </div>
          <div>
            <input
              id="end-date"
              type="text"
              autocomplete="off"
              placeholder="YY"
              v-model.number="card.year"
              max="2"
              min="2"
            />
            <div class="error-message" v-if="v$.year.$error">
              {{ v$.year.$errors[0].$message }}
            </div>
          </div>
        </div>
      </div>
      <div class="cvc form--input">
        <label for="strat-date">CVC</label>
        <input
          id="end-date"
          v-model.number="card.cvc"
          type="text"
          autocomplete="off"
          placeholder="CVC"
        />
        <div class="error-message" v-if="v$.cvc.$error">
          {{ v$.cvc.$errors[0].$message }}
        </div>
      </div>
    </div>

    <button class="form--button">Confirm</button>
  </form>
  <div v-else class="message-container">
    <CompleteIcon />
    <p class="message--one">Thank You!</p>
    <p class="message--two">We've added your card details</p>
    <button
      class="form--button"
      @click="(notSubmitted = !notSubmitted), resetCard()"
    >
      Continue
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useCard } from "@/composables/checkout.composable";
import CompleteIcon from "@/components/Icons/IconComplete.vue";

export default defineComponent({
  components: {
    CompleteIcon,
  },
  setup() {
    let { card: card, v$, resetCard } = useCard();
    let notSubmitted = ref(true);

    const submit = async () => {
      const valid = await v$.value.$validate();

      if (valid) {
        notSubmitted.value = !notSubmitted.value;
      }
    };

    return {
      v$,
      card,
      submit,
      notSubmitted,
      resetCard,
    };
  },
});
</script>

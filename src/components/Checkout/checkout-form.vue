<template>
  <form @submit.prevent="submit()" class="checkout--form">
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
        {{ v$.$errors[0].$message }}
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
        {{ v$.$errors[1].$message }}
      </div>
    </div>
    <div class="date_wrapper">
      <div class="form--input">
        <label for="strat-date">EXP. DATE ( MM / YY )</label>
        <div class="input_wrapper">
          <input
            id="start-date"
            type="text"
            autocomplete="off"
            placeholder="MM"
            v-model.number="card.month"
          />
          <input
            id="end-date"
            type="text"
            autocomplete="off"
            placeholder="YY"
            v-model.number="card.year"
            max="4"
          />
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
      </div>
    </div>
    <button class="form--button">Confirm</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useCard } from "@/composables/checkout.composable";

export default defineComponent({
  setup() {
    let { card: card, v$ } = useCard();

    const submit = async () => {
      // console.log("herererrererr", card.value.cardNumber!.length);
      const result = await v$.value.$validate();

      if (!result) {
        // notify user form is invalid
        console.log("invalid form");
        return;
      }
    };

    return {
      v$,
      card,
      submit,
    };
  },
});
</script>

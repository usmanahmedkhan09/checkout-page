<template>
  <form class="checkout--form">
    <div class="form--input">
      <label for="name">CARDHOLDER NAME</label>
      <input
        id="name"
        type="text"
        placeholder="eg : Usman Ahmed"
        autocomplete="off"
      />
    </div>
    <div class="form--input">
      <label for="card number">CARD NUMBER</label>
      <input
        id="card number"
        type="text"
        autocomplete="off"
        placeholder="eg : 1234 6785 5634 0456"
      />
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
          />
          <input
            id="end-date"
            type="text"
            autocomplete="off"
            placeholder="YY"
          />
        </div>
      </div>
      <div class="cvc form--input">
        <label for="strat-date">CVC</label>
        <input id="end-date" type="text" autocomplete="off" placeholder="CVC" />
      </div>
    </div>
    <button class="form--button">Confirm</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

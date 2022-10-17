import { useVuelidate } from "@vuelidate/core";
import { ref } from "vue";
import Card from "@/modals/checkout.modal";
import { useValidationRules } from "./vaidationRules.composable";


let card = ref(new Card());
export const useCard = () =>
{
    let { rules } = useValidationRules()

    const resetCard = () =>
    {
        card.value = new Card()
    }
    return {
        card,
        v$: useVuelidate(rules, card),
        resetCard
    }
}
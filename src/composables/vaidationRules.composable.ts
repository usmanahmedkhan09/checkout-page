import { required, alpha, helpers, minLength, maxLength } from "@vuelidate/validators";
import { ref } from 'vue'

export const useValidationRules = () =>
{
    const mustBeValidLength = (value: any) =>
    {

        let regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return value.match(regex) ? true : false


    }

    const string = (value: any) =>
    {
        let regex = /^[a-zA-Z ]+$/;
        return value.match(regex) ? true : false
    }

    let rules = ref({
        cardHolderName: {
            required: helpers.withMessage('Name is Required', required),
            alpha: helpers.withMessage('Card holder name only contains alphabets and space', string),
            minLengthValue: minLength(5),
            maxLengthValue: maxLength(20)
        },
        cardNumber: {
            required: helpers.withMessage('Card Number is Required', required),
            minLengthValue: minLength(19),

        }
    });
    // integer: helpers.withMessage('Card holder name only contains alphabets and space', mustBeValidLength),/





    return {
        rules,
    }
}
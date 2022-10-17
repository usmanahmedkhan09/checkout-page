import { required, alpha, helpers, minLength, maxLength } from "@vuelidate/validators";
import { ref } from 'vue'

export const useValidationRules = () =>
{
    const mustBeValidLength = (value: any) =>
    {
        if (value)
        {
            return value.split(' ').join('').length == 16
        }

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
            integer: required,
            mustBeValidLength

        }
    });





    return {
        rules,
    }
}
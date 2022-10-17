import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import { useVuelidate } from '@vuelidate/core'



import './assets/css/index.scss'

createApp(App).use(useVuelidate).use(Maska).mount('#app')

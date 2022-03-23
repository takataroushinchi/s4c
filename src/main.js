import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { POSITION, TYPE } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
	position: POSITION.BOTTOM_RIGHT,
	timeout: 5000,
	showCloseButtonOnHover: true,
	hideProgressBar: true,
	toastDefaults: {
		[TYPE.DEFAULT]: {
			timeout: false,
		},
		[TYPE.INFO]: {
			timeout: 5000,
		},
		[TYPE.SUCCESS]: {
			timeout: 5000,
		},
		[TYPE.ERROR]: {
			timeout: false,
		},
		[TYPE.WARNING]: {
			timeout: 5000,
		}
	}
};

createApp(App).use(store).use(router).use(Toast, options).mount('#app')

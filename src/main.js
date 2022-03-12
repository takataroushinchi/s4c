import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { POSITION, TYPE } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
	position: POSITION.BOTTOM_RIGHT,
	timeout: 3000,
	// closeButton: false,
	showCloseButtonOnHover: true,
	hideProgressBar: true,
	toastDefaults: {
		[TYPE.DEFAULT]: {
			timeout: false,
		},
		[TYPE.INFO]: {
			timeout: 3000,
		},
		[TYPE.SUCCESS]: {
			timeout: 3000,
		},
		[TYPE.ERROR]: {
			timeout: false,
		},
		[TYPE.WARNING]: {
			timeout: 3000,
		}
	}
};

createApp(App).use(store).use(router).use(Toast, options).mount('#app')

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
	hideProgressBar: true,
	// maxToasts: 20,
  // newestOnTop: false,
	// transition: "fade",
	toastDefaults: {
		[TYPE.INFO]: {
			timeout: 3000,
			closeButton: false,
		},
		[TYPE.SUCCESS]: {
			timeout: 3000,
			closeButton: false,
		},
		[TYPE.ERROR]: {
			timeout: false,
		},
		[TYPE.WARNING]: {
			timeout: 3000,
			closeButton: false,
		}
	}
};

createApp(App).use(store).use(router).use(Toast, options).mount('#app')

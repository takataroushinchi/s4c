// 全体に適用するCSSをimport
import '../src/assets/css/common.css';
import 'vue2-datepicker/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
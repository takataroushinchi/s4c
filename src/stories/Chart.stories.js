import SsssChart from '../components/Chart.vue';

export default {
  title: 'Components/Chart',
  component: SsssChart,
};

const Template = (args) => ({
  components: { SsssChart },
  setup() {
    return { ...args };
  },
  template: '<ssss-chart />',
});

export const Chart = Template.bind({});

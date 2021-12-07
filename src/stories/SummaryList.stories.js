import SsssSummaryList from '../components/SummaryList.vue';

export default {
  title: 'Home/SummaryList',
  component: SsssSummaryList,
};

const Template = (args) => ({
  components: { SsssSummaryList },
  setup() {
    return { ...args };
  },
  template: '<ssss-summary-list />',
});

export const SummaryList = Template.bind({});

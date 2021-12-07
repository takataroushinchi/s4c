import MyHeader from '../components/Header.vue';

export default {
  title: 'Components/Header',
  component: MyHeader,
};

const Template = (args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  template: '<my-header :title="text" />',
});

export const Title01 = Template.bind({});
Title01.args = {
  text: 'テキスト01',
};

export const Title02 = Template.bind({});
Title02.args = {
  text: 'テキスト02',
};

import CampaignContent from '../components/CampaignContent.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'CampaignEdit/Content',
  component: CampaignContent,
  parameters: {
    layout: "centered",
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return notes.markdown;
        }
        return null;
      }
    },
    notes: { markdown }
  }
};

const Template = (args) => ({
  components: { CampaignContent },
  setup() {
    return { ...args };
  },
  template: '<CampaignContent :text="text" :isEdit="isEdit" />',
});

export const Create = Template.bind({});
Create.args = {
  text: '作成',
  isEdit: false,
};

export const Edit = Template.bind({});
Edit.args = {
  text: '変更',
  isEdit: true,
};
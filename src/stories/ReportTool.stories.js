import ReportTool from '../components/ReportTool.vue';

const textData = require('./notes/sample.md')
const markdown = textData.default

export default {
  title: 'Report/Tool',
  component: ReportTool,
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
  components: { ReportTool },
  setup() {
    return { ...args };
  },
  template: '<ReportTool :dimension="dimensionRef" />',
});

export const Daily = Template.bind({});
Daily.args = {
  dimensionRef: 'daily',
};

export const Monthly = Template.bind({});
Monthly.args = {
  dimensionRef: 'monthly',
};

export const Campaign = Template.bind({});
Campaign.args = {
  dimensionRef: 'campaign',
};
import fruitPage from "../main/webpack/components/fruitpage/fruitPage.vue";

export default {
  title: "fruitPage",
  component: fruitPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { fruitPage },
  template: "<fruitPage :optionalID='optionalID' />",
});

export const Primary = Template.bind({});
Primary.args = {
  optionalID: "101",
};

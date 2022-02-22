import helloVue from "../main/webpack/components/hellovue/helloVue.vue";

export default {
  title: "helloVue",
  component: helloVue,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { helloVue },
  template: "<helloVue :msg='msg' />",
});

export const Primary = Template.bind({});
Primary.args = {
  msg: "Hello Vue!",
};

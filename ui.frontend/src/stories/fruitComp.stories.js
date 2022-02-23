import fruitComp from "../main/webpack/components/fruit-comp/fruitComp.vue";

export default {
  title: "fruitComp",
  component: fruitComp,
};

export const Primary = () => ({
  components: { fruitComp },
  template: "<fruitComp />",
});

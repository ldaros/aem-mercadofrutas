import fruitSearch from "../main/webpack/components/fruitsearch/fruitSearch.vue";

export default {
  title: "fruitSearch",
  component: fruitSearch,
};

export const Primary = () => ({
  components: { fruitSearch },
  template: "<fruitSearch />",
});

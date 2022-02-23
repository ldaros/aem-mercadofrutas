import fruitSearch from "../main/webpack/components/fruit-search/fruitSearch.vue";

export default {
  title: "fruitSearch",
  component: fruitSearch,
};

export const Primary = () => ({
  components: { fruitSearch },
  template: "<fruitSearch />",
});

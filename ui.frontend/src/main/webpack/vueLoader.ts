import Vue from "vue";
import fruitComp from "./components/fruit-comp/fruitComp.vue";
import fruitSearch from "./components/fruit-search/fruitSearch.vue";
import fruitPage from "./components/fruit-page/fruitPage.vue";
import helloVue from "./components/hello-vue/helloVue.vue";
import { VueConstructor } from "vue/types/umd";

// lista de componentes que serão carregados
const components = [
  { name: fruitComp, selector: "[data-vue='fruit-comp']" },
  { name: fruitSearch, selector: "[data-vue='fruit-search']" },
  { name: fruitPage, selector: "[data-vue='fruit-page']" },
];

// inicializa o carregamento de componentes
async function init() {
  components.forEach((component) => {
    injectVue(component.name, component.selector);
  });

  // componente especial que tem props
  injectVueHello();
  return;
}

// insere o componente no elemento
function injectVue(component: VueConstructor, selector: string) {
  const divs = document.querySelectorAll(selector);

  divs.forEach((div) => {
    new Vue({
      el: div,
      render: (h) => h(component),
    });

    div.removeAttribute("data-cmp-is");
  });

  return;
}

function injectVueHello() {
  const divs = document.querySelectorAll("[data-vue='hello-vue']");

  divs.forEach((div) => {
    const params = div.getAttribute("data-params");
    console.log(params);

    new Vue({
      el: div,
      render: (h) =>
        h(helloVue, {
          props: {
            msg: params,
          },
        }),
    });

    div.removeAttribute("data-cmp-is");
  });

  return;
}

// quando o documento estiver pronto, executa a função init
document.addEventListener("DOMContentLoaded", init);

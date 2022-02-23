import Vue from "vue";
import fruitComp from "../components/fruitcomp/fruitComp.vue";
import fruitSearch from "../components/fruitsearch/fruitSearch.vue";
import fruitPage from "../components/fruitpage/fruitPage.vue";
import helloVue from "../components/hellovue/helloVue.vue";

const fruitCompSelector = "[data-vue='fruit-comp']";
const fruitSearchSelector = "[data-vue='fruit-search']";
const fruitPageSelector = "[data-vue='fruit-page']";
const helloVueSelector = "[data-vue='hello-vue']";

async function init() {
  injectVue(fruitCompSelector, fruitComp);
  injectVue(fruitSearchSelector, fruitSearch);
  injectVue(fruitPageSelector, fruitPage);

  injectVueHello();

  return;
}

function injectVue(selector, component) {
  let divs = document.querySelectorAll(selector);

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
  let divs = document.querySelectorAll(helloVueSelector);

  divs.forEach((div) => {
    let params = div.getAttribute("data-params");
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

import Vue from "vue";
import Hello from "./helloVue.vue";

require("./style.scss");

function init() {
  // seletor do vue, definido no htl
  const selector = "[data-cmp-is='hellovue']";

  // seleciona todos os elementos com o seletor
  let divs = document.querySelectorAll(selector);

  // para cada elemento, cria um vue
  for (let i = 0; i < divs.length; i++) {
    // get data-params on div
    let message = divs[i].getAttribute("data-params");

    new Vue({
      el: divs[i],
      render: (h) =>
        h(Hello, {
          props: {
            msg: message,
          },
        }),
    });

    // removendo o atributo para não criar mais vue
    divs[i].removeAttribute("data-cmp-is");
  }
}

// quando o documento estiver pronto, executa a função init
document.addEventListener("DOMContentLoaded", init);

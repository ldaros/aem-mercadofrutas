import Vue from "vue";
import fruitComp from "./fruitComp.vue";

require("./style.scss");

async function init() {
  // seletor do vue, definido no htl
  const selector = "[data-cmp-is='fruitcomp']";

  // seleciona todos os elementos com o seletor
  let divs = document.querySelectorAll(selector);

  // para cada elemento, crie um componente vue
  for (let i = 0; i < divs.length; i++) {
    new Vue({
      el: divs[i],
      render: (h) => h(fruitComp),
    });

    // removendo o atributo
    divs[i].removeAttribute("data-cmp-is");
  }

  return;
}

// quando o documento estiver pronto, executa a função init
document.addEventListener("DOMContentLoaded", init);
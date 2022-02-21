<template>
  <div class="cmp-fruit">
    <div
      class="cmp-fruit--container"
      v-for="fruit in fruits"
      :key="fruit.id + '-display'"
      @click="openTab(fruit.id)"
    >
      <div class="cmp-fruit--image">{{ fruit.image }}</div>

      <p class="cmp-fruit--price">
        R$ {{ fruit.price }}
        <span class="cmp--fruit--discount">{{ getDiscount() }}</span>
      </p>
      <p class="cmp-fruit--priceslice">
        6x R$ {{ (fruit.price / 6).toFixed(2) }}
      </p>

      <p class="cmp-fruit--name">{{ fruit.name }}</p>

      <p class="cmp-fruit--frete" v-if="Math.floor(Math.random() * 2) == 0">
        Frete grátis
      </p>
      <p class="cmp-fruit--stock">Em estoque: {{ fruit.stock }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "fruitComp",

  // state
  data() {
    return {
      fruits: [],
    };
  },

  methods: {
    async buy(id) {
      let body = { bProducts: [id] };

      await axios.post("https://ofruit-api.herokuapp.com/buy", body);

      this.getData();
    },

    async getData() {
      await axios
        .get("https://ofruit-api.herokuapp.com/products")
        .then((res) => {
          this.fruits = res.data;
        });
    },

    openTab(id) {
      // get current url
      let url = window.location.href;

      // if url has params remove them
      if (url.indexOf("?") != -1) {
        url = url.substring(0, url.indexOf("?"));
      }

      // remove .html from end of url
      url = url.substring(0, url.length - 5);

      // add product id to url
      url += `/product.html?wcmmode=disabled&id=${id}`;

      // open tab on this window
      window.open(url, "_self");
    },

    getDiscount(price) {
      const hasDiscount = Math.floor(Math.random() * 2);
      if (hasDiscount == 0) return;

      let discount = Math.floor(Math.random() * 10) + "% OFF";
      return discount;
    },
  },

  created() {
    this.getData();
  },
};
</script>

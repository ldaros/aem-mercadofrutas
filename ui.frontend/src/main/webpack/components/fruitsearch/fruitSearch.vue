<template>
  <div class="cmp-fruitsearch--container">
    <input
      class="cmp-fruitsearch--input"
      type="text"
      v-model="search"
      placeholder="Buscar frutas..."
      @keyup="getSearchResults()"
    />

    <div class="cmp-fruitsearch--results" v-if="results.length > 0">
      <div
        class="cmp-fruitsearch--result"
        v-for="fruit in results"
        :key="fruit.id + '-result'"
        @click="openTab(fruit.id)"
      >
        <p class="cmp-fruitsearch--result-img">{{ fruit.image }}</p>
        <p class="cmp-fruitsearch--result-name">{{ fruit.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "fruitSearch",
  data() {
    return {
      data: [],
      search: "",
      results: [],
    };
  },

  methods: {
    async getData() {
      await axios
        .get("https://ofruit-api.herokuapp.com/products")
        .then((res) => {
          this.data = res.data;
        });
    },

    getSearchResults() {
      // if the search is empty return;
      if (this.search === "") {
        this.results = [];
        return;
      }

      this.results = this.data.filter((fruit) => {
        if (fruit.name.toLowerCase().includes(this.search.toLowerCase())) {
          return fruit;
        }
      });
    },

    openTab(id) {
      // get current url
      let url = window.location.href;

      // if url has params remove them
      if (url.indexOf("?") != -1) {
        url = url.substring(0, url.indexOf("?"));
      }

      // if url ends with .html remove it
      if (url.endsWith(".html")) {
        url = url.substring(0, url.length - 5);
      }

      // if url ends with /product remove it
      if (url.endsWith("/product")) {
        url = url.substring(0, url.length - 8);
      }

      // add product id to url
      url += `/product.html?wcmmode=disabled&id=${id}`;

      // open tab on this window
      window.open(url, "_self");
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>

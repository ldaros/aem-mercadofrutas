<template>
  <div class="cmp-moreproducts--container" @click="gotoUrl(product.id)">
    <div class="cmp-moreproducts--img">
      {{ product.image }}
    </div>
    <h5 class="cmp-moreproducts--title">{{ product.name }}</h5>
    <p class="cmp-moreproducts--price">R$ {{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "smallProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    gotoUrl(id) {
      // get current url
      const currentUrl = window.location.href;

      let newUrl = "";

      // if url has params remove them
      if (currentUrl.indexOf("?") != -1) {
        newUrl = currentUrl.substring(0, currentUrl.indexOf("?"));
      }

      // add id
      window.location.href = newUrl + "?wcmmode=disabled&id=" + id;
    },
  },
};
</script>

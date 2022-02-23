<template>
  <div class="cmp-fruitpage--container">
    <div class="cmp-fruitpage--img">{{ fruit.image }}</div>
    <div>
      <h2 class="cmp-fruitpage--title">{{ fruit.name }}</h2>

      <p class="cmp-fruitpage--stars">{{ this.stars }}</p>

      <h3 class="cmp-fruitpage--pricefake">R$ {{ fruit.price * 2 }}</h3>
      <h3 class="cmp-fruitpage--price">R$ {{ fruit.price }}</h3>
      <h3 class="cmp-fruitpage--pricetimes">
        Em 3x de R$ {{ (fruit.price / 3).toFixed(2) }} sem juros
      </h3>

      <h4 class="cmp-fruitpage--stock">Em estoque: {{ fruit.stock }}</h4>

      <button class="cmp-fruitpage--btn" @click="buy(fruit.id)">
        Comprar agora
      </button>
    </div>

    <!-- Descrição -->
    <div class="cmp-description">
      <h2 class="cmp-fruitpage--sub">Descrição</h2>

      <p class="cmp-description--text">
        {{ this.description }}
      </p>
    </div>

    <!-- Mais Produtos -->
    <div class="cmp-moreproducts">
      <h2 class="cmp-fruitpage--sub">Compare com outros produtos similares</h2>
      <small-product
        v-for="product in products"
        :product="product"
        :key="product.id + '-small'"
      ></small-product>
    </div>

    <!-- Comentarios -->
    <div class="cmp-fruitpage--comments">
      <h2 class="cmp-fruitpage--sub">Perguntas e respostas</h2>

      <comment
        :comment="comment"
        v-for="comment in comments"
        :key="comment.id + '-comment'"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { faker } from "@faker-js/faker";
import Comment from "./Comment.vue";
import SmallProduct from "./smallProduct.vue";

require("./style.scss");

function randNum(min, max) {
  return faker.datatype.number({ min, max });
}

export default {
  components: { Comment, SmallProduct },
  name: "fruitPage",

  data() {
    return {
      products: [],
      fruit: {},
      comments: [],
      generate: false,
      stars: "",
      description: "",
    };
  },

  props: {
    optionalID: {
      type: Number,
      required: false,
    },
  },

  methods: {
    async buy(id) {
      let body = { bProducts: [id] };

      await axios.post("https://ofruit-api.herokuapp.com/buy", body);

      this.getData();
    },

    getId() {
      // Se o ID for passado por propriedade, usa-o
      if (this.optionalID) return this.optionalID;

      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("id");
    },

    async getData() {
      await axios
        .get("https://ofruit-api.herokuapp.com/products")
        .then((res) => {
          // add 4 random products to products array
          if (!this.generate) {
            this.products = [];

            while (this.products.length < 4) {
              let product = res.data[randNum(0, res.data.length - 1)];

              // dont allow duplicates
              if (this.products.indexOf(product) == -1) {
                this.products.push(product);
              }
            }

            this.generate = true;
          }

          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].id == this.getId()) {
              this.fruit = res.data[i];
            }
          }
        });
    },

    generateComments() {
      for (let i = 0; i < randNum(3, 20); i++) {
        this.comments.push({
          id: i,
          title: faker.name.findName(),
          text: faker.lorem.paragraph(),
          likes: randNum(10, 900),
          dislikes: randNum(0, 100),
          stars: this.getStars(1, 5),
        });
      }
    },

    getStars(min, max) {
      const starsNumber = randNum(min, max);
      let stars = "";

      for (let i = 0; i < starsNumber; i++) {
        stars += "⭐";
      }

      return stars;
    },
  },

  created() {
    this.getData();
    this.generateComments();

    this.stars = this.getStars(3, 5);
    this.description = faker.lorem.paragraphs(randNum(2, 4));
  },
};
</script>

<style lang="scss" scoped></style>

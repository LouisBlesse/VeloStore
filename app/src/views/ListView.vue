<template>
  <div class="listview">
    <h2>Nos Vélos</h2>
    <ul>
      <li v-for="(product, index) in this.$store.state.products" :key="index">
        <font-awesome-icon
          class="icon-heart"
          @click="addToWishList(product)"
          icon="heart"
        />

        <img :src="product.image" :alt="product.name" />

        <h4>{{ product.name }}</h4>
        <span> {{ product.price }} €</span>
        <button>
          Ajouter un produit
          <font-awesome-icon @click="addToCart(product)" icon="cart-plus" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "HomeView",
  components: { Header },
  methods: {
    addToWishList(element) {
      this.$store.commit("addToWishList", element);
    },
    addToCart(element) {
      this.$store.commit("addToCart", element);
    },
  },
};
</script>

<style lang="scss" scoped>
.listview {
  background: linear-gradient(#071e38, #040614);
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #fff;
    text-align: center;
    margin: 3rem 0;
  }

  ul {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding: 3rem;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 1rem;
      width: 200px;
      background-color: rgb(119, 184, 219);
      color: #071e38;
      border-radius: 5px;
      position: relative;

      h4 {
        font-size: 1.6rem;
        padding-left: 0.3rem;
      }

      .icon-heart {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
      }

      span {
        padding-left: 0.3rem;
        font-size: 2rem;
      }

      img {
        width: 90%;
        height: 150px;
        margin: 0.3rem auto;
      }

      button {
        background-color: #040614;
        color: #fff;
        border: none;
        margin: 0.3rem;
        padding: 0.3rem;
      }
    }
  }
}
</style>

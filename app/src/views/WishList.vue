<template>
  <div class="wishlist">
    <h2>Wish List</h2>
    <ul>
      <li v-for="(product, index) in this.$store.state.wishlist" :key="index">
        <div class="left">
          <img :src="product.image" :alt="product.name" />
          <div class="body">
            <span> {{ product.name }} </span>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <span> {{ product.price }} </span>
        <font-awesome-icon class="cart-icon" icon="cart-plus" />
        <font-awesome-icon
          @click="deleteItemOfWishList(product.id)"
          class="close-icon"
          icon="circle-xmark"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WishList",
  data() {
    return {};
  },
  methods: {
    deleteItemOfWishList(index) {
      console.log(index);
      let elementToDelete = this.$store.state.wishlist.findIndex(
        (x) => x.id === index
      );
      this.$store.state.wishlist.splice(elementToDelete, 1);
      index = undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
.wishlist {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 7vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;

  align-items: center;
  h2 {
    text-align: center;
    margin: 2rem;
  }
  ul {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 3rem;

    li {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      border-bottom: 1px solid #fff;
      padding-bottom: 0.7rem;

      .cart-icon,
      .close-icon {
        color: #fff;
      }

      .left {
        display: flex;

        .body {
          p,
          span {
            margin: 0.3rem;
          }
        }
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin: 0 0.3rem;
      }
    }
  }
}
</style>

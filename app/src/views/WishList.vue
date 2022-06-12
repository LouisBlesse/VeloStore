<template>
  <div class="wishlist">
    <h2>Liste de souhaits</h2>
    <p v-if="this.$store.state.wishlist.length === 0">
      Il n'y a pas de produits la liste de souhaits
    </p>
    <ul>
      <li v-for="(product, index) in this.$store.state.wishlist" :key="index">
        <div class="left">
          <!-- <img :src="product.image" :alt="product.name" /> -->
          <img src="../assets/bike_one.png" :alt="product.name" />

          <div class="body">
            <!-- <span> {{ product.name }} </span>  -->
            <span id="title"> L'Urbain</span>
            <font-awesome-icon class="cart-icon" icon="cart-plus" />

            <!-- <p>{{ product.description }}</p> -->
            <p id="overview">
              Avec son cadre semi-ouvert, le modèle Urbain offre les mêmes
              caractéristiques que son homologue Sport, en proposant une
              position plus droite. Barre tombante, guidon tournant plus souple,
              il assurera une conduite plus douce et tranquille. Il est donc
              parfaitement adapté autant à la mobilité urbaine qu’à vos plus
              belles balades en campagne. Disponible en blanc et noir.
            </p>
          </div>
        </div>
        <!-- <span> {{ product.price }} </span> -->
        <div class="right">
          <span id="price">50€</span>
          <font-awesome-icon
            @click="deleteItemOfWishList(product.id)"
            class="close-icon"
            icon="circle-xmark"
          />
        </div>
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
  background: #fff;
  height: calc(100vh - 7vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;

  p {
    color: #000000;
  }
  h2 {
    text-align: center;
    margin: 2rem;
    color: #000000;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1488px;
    padding: 3rem;

    li {
      width: 90%;
      height: 141px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
      border-radius: 10px;
      padding-bottom: 0.7rem;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .left {
        display: flex;
        width: 90%;
        .body {
          #title {
            font-family: "Rubik";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }
          .cart-icon {
            color: black;
            font-size: 20px;
            margin-left: 1rem;
          }

          #overview {
            font-family: "Rubik";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
          }
        }
      }

      .right {
        display: flex;
        width: 30%;
        align-items: center;
        justify-content: center;
        #price {
          color: black;
          margin: auto;
          font-family: "Rubik";
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 43px;
          color: #252525;
        }

        .close-icon {
          margin: auto;
          font-size: 28px;
          color: black;
        }
      }

      img {
        width: 218px;
        height: 112px;
        border-radius: 5px;
        margin: 0 0.7rem;
      }
    }
  }
}
</style>

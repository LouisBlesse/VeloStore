<template>
  <div class="listview">
    <h2>Nos Vélos</h2>
    <button @click="this.$router.push('/addbikeview')">
      Ajouter un produit
    </button>
    <div class="filter">
      <input type="text" v-model="name" placeholder="saisir le nom" />
      <select name="pertinance" id="select">
        <option value="">Type</option>
        <option value="dog">Vélos</option>
        <option value="cat">Accessoires</option>
      </select>
      <select name="pertinance" id="select">
        <option value="">Pertinence</option>
        <option value="dog">+ chère</option>
        <option value="cat">- chère</option>
      </select>
    </div>
    <ul>
      <li v-for="product in this.listVelo" :key="product.key">
        <font-awesome-icon
          class="icon-heart"
          @click="addToWishList(product)"
          icon="heart"
        />
        <img :src="product.image" :alt="product.name" />
        <h4>{{ product.name }}</h4>

        <div class="card-top">
          <span> {{ product.price }} €</span>
          <font-awesome-icon
            class="icon-cart-plus"
            @click="addToCart(product)"
            icon="cart-plus"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { uuid } from "vue-uuid";

export default {
  name: "HomeView",
  data() {
    return {
      listVelo: [],
    };
  },
  components: { Header },
  methods: {
    // addToWishList(element) {
    //   this.$store.commit("addToWishList", element);
    // },
    addToCart(element) {
      const id = uuid.v1();
      const db = getDatabase();

      const auth = getAuth();
      const user = auth.currentUser;
      set(ref(db, "panier/" + id), {
        id_user: user.uid,
        id_produit: element.key,
      });
      // this.$store.commit("addToCart", element);
    },
    addToWishList(element) {
      const id = uuid.v1();
      const db = getDatabase();

      const auth = getAuth();
      const user = auth.currentUser;
      set(ref(db, "wishlist/" + id), {
        id_user: user.uid,
        id_produit: element.key,
      });
      // this.$store.commit("addToCart", element);
    },
    getData() {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `produits/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // snapshot.val();
            var returnArr = [];

            snapshot.forEach(function (childSnapshot) {
              var item = childSnapshot.val();
              item.key = childSnapshot.key;
              returnArr.push(item);
            });

            this.listVelo = returnArr;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.listview {
  background: #fff;
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

  .filter {
    width: 1089px;
    height: 112px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    input {
      width: 195px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 10px;
      padding-left: 10px;
    }

    select {
      padding-left: 10px;
      width: 195px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 10px;
    }
  }

  ul {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding: 3rem;

    li {
      width: 100px;
      list-style-type: none;
      position: relative;
      color: #000000;
      width: 319px;
      height: 289px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 1rem;

      .card-top {
        display: flex;
        align-items: center;
        h4 {
          font-size: 20px;
          padding-left: 0.6rem;
          padding-top: 0.5rem !important;
          padding: 0 1.3rem;
        }
        .icon-cart-plus {
          padding-left: 0.6rem;
          font-size: 20px;
        }
      }

      .cart-body {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #aaaaaa;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.3rem;
      }

      .icon-heart {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        color: black;
      }

      span {
        padding-left: 0.3rem;
        font-size: 2rem;
      }

      img {
        width: 319px;
        height: 166px;
        border-radius: 1px;
        background-size: cover;
        // margin: 0.3rem auto;
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

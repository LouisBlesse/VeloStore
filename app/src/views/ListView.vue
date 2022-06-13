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
      <li v-for="product in this.listVelo" :key="product.key" @click="this.$router.push(`/articleview/${product.key}`)">
        <font-awesome-icon
          class="icon-heart"
          @click="addToWishList(product)"
          icon="heart"
        />
        <img
          :id="product.photo"
          :src="i"
          :alt="product.photo"
          :onerror="getImage(product.photo)"
        />
        <h4>{{ product.name }}</h4>

        <div class="card-top">
          <span> {{ product.prix }} €</span>
          <font-awesome-icon
            :class="test ? 'icon-cart-plus' : ''"
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
import { getStorage, ref as refStore, getDownloadURL } from "firebase/storage";

export default {
  name: "HomeView",
  data() {
    return {
      listVelo: [],
      test: false,
    };
  },
  components: { Header },
  methods: {
    addToCart(element) {
      const id = uuid.v1();
      const dbRef = ref(getDatabase());
      const db = getDatabase();

      const auth = getAuth();
      const user = auth.currentUser;
      var existe = 0;

      get(child(dbRef, `panier/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              if (childSnapshot.val().id_user === user.uid) {
                if (element.key === childSnapshot.val().id_produit) {
                  existe = 1;
                }
              }
            });
          }
        })
        .then(() => {
          if (existe == 0) {
            console.log("envoie");
            set(ref(db, "panier/" + id), {
              id_user: user.uid,
              id_produit: element.key,
            });
          }
        });
    },

    getImage(key) {
      const storage = getStorage();
      console.log("key : " + key);
      getDownloadURL(
        refStore(storage, "gs://velostore-124cf.appspot.com/" + key)
      )
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          // This can be downloaded directly:
          const img = document.getElementById(key);
          img.setAttribute("src", url);
          console.log("url:" + url);
        })
        .catch((error) => {
          // Handle any error
        });
    },

    addToWishList(element) {
      const id = uuid.v1();
      const db = getDatabase();
      const auth = getAuth();
      const user = auth.currentUser;
      const dbRef = ref(getDatabase());
      var existe = 0;

      get(child(dbRef, `wishlist/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              if (childSnapshot.val().id_user === user.uid) {
                if (element.key === childSnapshot.val().id_produit) {
                  console.log("l'élément existe");
                  existe = 1;
                }
              }
            });
          }
        })
        .then(() => {
          if (existe == 0) {
            console.log("envoie");
            set(ref(db, "wishlist/" + id), {
              id_user: user.uid,
              id_produit: element.key,
            });
          }
        });
    },

    getData() {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `produits/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
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
          color: white;
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

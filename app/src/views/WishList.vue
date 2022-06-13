<template>
  <div class="wishlist">
    <h2>Liste de souhaits</h2>
    <p v-if="wishlist.length === 0">
      Il n'y a pas de produits la liste de souhaits
    </p>
    <ul>
      <li v-for="(product, index) in wishlist" :key="index">
        <div class="left">
          <img :src="product.photo" :alt="product.name" />

          <div class="body">
            <span> {{ product.name }} </span>
            <font-awesome-icon class="cart-icon" icon="cart-plus" @click="buy(product)"/>

            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="right">
          <span> {{ product.price }} </span>
          <font-awesome-icon
            @click="deleteItemOfWishList(product)"
            class="close-icon"
            icon="circle-xmark"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, child, get, remove, t } from "firebase/database";
import { getAuth } from "firebase/auth";

export default {
  name: "WishList",
  data() {
    return {
      wishlist: [],
    };
  },
  methods: {
    deleteItemOfWishList(index) {
      const db = getDatabase();

      let element = this.wishlist.findIndex((x) => x.key === index.key);
      this.wishlist.splice(element, 1);
      remove(ref(db, `wishlist/` + index.key));
    },
    getAllWishList() {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `wishlist/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let returnArr = [];

            snapshot.forEach(function (childSnapshot) {
              var item = childSnapshot.val();
              item.key = childSnapshot.key;
              returnArr.push(item);
            });

            const auth = getAuth();
            const user = auth.currentUser;

            for (const iterator of returnArr) {
              if (iterator.id_user === user.uid) {
                get(child(dbRef, `produits/` + iterator.id_produit)).then(
                  (snapshot) => {
                    if (snapshot.exists()) {
                      let objet = {};
                      objet = snapshot.val();
                      objet.key = iterator.key;
                      this.wishlist.push(objet);
                    }
                  }
                );
              }
            }
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
    this.getAllWishList();
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

      span {
        color: #000000;
      }
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

<template>
  <div class="wishlist">
    <h2>Panier</h2>
    <!-- <p v-if="this.$store.state.getProduit.length === 0">
      vous n'avez pas encore ajouter d'élément dans le panier
    </p> -->
    <div class="container">
      <ul>
        <li v-for="(product, index) in getProduit" :key="index">
          <div class="left">
            <img :src="product.image" :alt="product.name" />
            <img src="../assets/bike_one.png" :alt="product.name" />n
            <div class="body">
              <span> {{ product.name }} </span>
              <span> {{ product.prix }} </span>
            </div>
          </div>
          <font-awesome-icon
            @click="deleteItemOfCart(product)"
            class="close-icon"
            icon="circle-xmark"
          />
        </li>
      </ul>
      <div class="cart-container">
        <h3>Total</h3>
        <p>Nombre d'items : {{getProduit.length}}</p>
        <p>Somme : {{somme()}} €</p>
        <button>Payer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

export default {
  name: "CartView",
  data() {
    return {
      arrayCart: [],
      getProduit: [],
    };
  },
  methods: {
    somme(){
      let somme = 0
      for (let produitElement of this.getProduit) {
        somme = somme + parseInt(produitElement.prix)
      }
      return somme
    },
    deleteItemOfCart(element) {
      const db = getDatabase();
      let index = this.getProduit.findIndex((x) => x.key === element.key);
      this.getProduit.splice(index, 1);
      remove(ref(db, `panier/` + element.key));
    },
    getAllProduct() {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `panier/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            var returnArr = [];

            this.arrayCart = snapshot.val();

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
                      this.getProduit.push(objet);
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
    this.getAllProduct();
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
  h2 {
    text-align: center;
    margin: 2rem;
    color: #000000;
  }

  p {
    color: #000000;
  }

  .container {
    display: flex;
    ul {
      justify-content: center;
      display: flex;
      flex-direction: column;
      width: 65%;
      padding: 3rem;

      li {
        width: 448px;
        height: 111px;
        display: flex;
        align-items: center;
        margin: 1rem;
        border-radius: 10px;
        padding-bottom: 0.7rem;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: #000000;
        .cart-icon,
        .close-icon {
          color: #000000;
        }

        .close-icon {
          margin: 0 auto;
          font-size: 25px;
        }

        .left {
          display: flex;

          .body {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            p,
            span {
              margin: 0.3rem;
            }

            #title {
              font-family: "Rubik";
              font-style: normal;
              font-weight: 600;
              font-size: 20px;
              line-height: 24px;
              color: #000000;
            }
          }
        }

        #price {
          font-family: "Rubik";
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 43px;
          color: #252525;
        }
        img {
          width: 218px;
          height: 95px;
          border-radius: 5px;
          margin: 0 0.7rem;
        }
      }
    }

    .cart-container {
      width: 648px;
      height: 281px;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        color: #000000;
        margin: 0.5rem;
        border-bottom: 1px solid #dddddd;
        width: 80%;
        text-align: center;
      }
      p {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        margin: 0.5rem;
      }

      button {
        margin: 1rem;
        width: 202px;
        height: 46px;
        background: #444343;
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #ffffff;
        border: none;
        border-radius: 50px;
      }
    }
  }
}
</style>

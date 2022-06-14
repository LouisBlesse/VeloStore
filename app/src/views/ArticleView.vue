<template>
  <div class="article">
    <div class="back">
      <font-awesome-icon
        class="back-button"
        @click="this.$router.push('/listview')"
        icon="angle-left"
      />
    </div>
    <div class="main">
      <div class="picture">
        <img
          :id="this.article.photo"
          arc="i"
          :alt="this.article.photo"
          :onerror="getImage(article.photo)"
        />
      </div>
      <div class="infos">
        <h1>{{ this.article.name }}</h1>
        <!-- <h1>{{ store.state.products[store.state.products.findIndex((i) => i.id == $route.params.id)].name }}</h1> -->
        <p>{{ this.article.description }}</p>
        <div class="side-infos">
          <p>Prix : {{ this.article.prix }}€</p>
          <p>Vendeur : Jean Dupont</p>
          <p>Stock : 5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";
import { getStorage, ref as refStore, getDownloadURL } from "firebase/storage";

export default {
  name: "ArticleView",
  data() {
    return {
      article: [],
    };
  },
  methods: {
    getData() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `produits/${this.$route.params.id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.article = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
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
          console.log("okok");
        });
    },
  },
  mounted() {
    this.getData();
    this.getImage(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.article {
  min-height: calc(93vh);
}

h1 {
  font-size: 50px;
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 700;
}

.back-button {
  background-color: #fff;
  border: none;
  color: #1a1a1b;
  padding: 20px 30px;
  text-decoration: none;
  margin: 10px 20px;
  cursor: pointer;
  font-size: 30px;
}

.main {
  display: flex;
  margin: 0 4em 4em;
  font-family: "Open sans", Helvetica, sans-serif;
  min-height: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
  }

  .picture {
    min-width: 40%;
    max-width: 40%;
    margin-right: 5em;

    @media screen and (max-width: 992px) {
      min-width: 100%;
      max-width: 100%;
    }

    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  .infos {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 992px) {
      min-width: 100%;
      max-width: 100%;
    }

    * {
      padding: 20px;

      @media screen and (max-width: 992px) {
        margin: 20px 0;
      }
    }
  }
}

.side-infos {
  display: flex;
  justify-content: space-between;
  margin-right: 5em;

  @media screen and (max-width: 1280px) and (min-width: 992px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.button {
  display: flex;
  @media screen and (max-width: 1280px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 7em 0 0;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #555555;
  color: white;
  border: 2px solid #555555;
  border-radius: 5px;

  @media screen and (max-width: 1280px) {
    margin: 4px 0;
  }
}

button:hover {
  background-color: white;
  color: #444;
}
</style>

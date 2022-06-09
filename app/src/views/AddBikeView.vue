<template>
  <div class="add-bike">
    <form action="add-bike" @submit.prevent="addToProducts">
      <h1>Ajouter un produit</h1>
      <div class="item">
        <label for="nom">Nom de l'article</label>
        <input type="text" v-model="article.name" />
      </div>
      <div class="item">
        <label for="prix">Prix de l'article</label>
        <input type="text" v-model="article.price" />
      </div>
      <div class="item">
        <label for="photo">Photo de l'article</label>
        <input type="text" v-model="article.image" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBikeView",
  data() {
    return {
      article: {
        name: "",
        price: 0,
        image: "",
      },
    };
  },
  methods: {
    addToProducts() {
      this.$store.commit("addToProducts", this.article);
      this.$router.push("/listview");
    },
  },
};
</script>

<style lang="scss" scoped>
.add-bike {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 7vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 400px;
    height: 400px;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      margin: 0.4rem;
    }

    .item {
      display: flex;
      flex-direction: column;
      width: 80%;

      input[type="text"],
      input[type="email"],
      input[type="password"] {
        width: 100%;
        padding: 12px 10px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        border-radius: 4px;
      }

      label {
        color: black;
        margin: 0.3rem;
      }
    }
  }
}
</style>

<template>
  <div class="add-bike">
    <section>
      <form action="add-bike" @submit.prevent="addToDatabase">
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
          <label for="description">Description de l'article</label>
          <textarea v-model="article.description"></textarea>
        </div>
        <div class="item inputfile">
          <label for="inputPhoto">Photo de l'article
            <div class="fileclick">
              <i class="fa fa-2x fa-camera"></i>
              <input id="inputPhoto" type="file" accept="image/png, image/jpeg" @change="onFileChange"/>
              <span id="imageName"></span>
            </div>
          </label>
        </div>
        <div class="item">
          <label for="stock"
            >Nombre d'exemplaire à vendre</label
          >
          <input type="number" v-model="article.stock" />
        </div>
        <input type="submit" id="submit" />
      </form>
    </section>
  </div>
</template>

<script>
import { getDatabase, ref, set } from "firebase/database";
import { uuid } from "vue-uuid";
import { getStorage, ref as refStore, uploadBytes } from "firebase/storage";

export default {
  name: "AddBikeView",
  data() {
    return {
      article: {
        name: "",
        price: 0,
        image: "",
        description: "",
        stock: "",
      },
    };
  },
  methods: {
    // addToProducts() {
    //   this.$store.commit("addToProducts", this.article);
    // },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.article.image = files[0];
      //this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.article.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    addToDatabase() {
      const id = uuid.v1();
      ////////////Image
      const storage = getStorage();
      const spaceRef = refStore(storage, "Velos/" + id);

      /*const metadata = {
        contentType: 'image/png',
      };*/

      uploadBytes(spaceRef, this.article.image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      ///////////Datas
      console.log(id);
      console.log(this.article);
      const db = getDatabase();
      set(ref(db, "produits/" + id), {
        description: this.article.description,
        photo: spaceRef.fullPath,
        name: this.article.name,
        prix: this.article.price,
        stock: this.article.stock,
      });
      this.$router.push("/listview");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  // background: linear-gradient(#071e38, #040614);
  background-color: #fff;
  height: calc(100vh - 7vh);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";

  form {
    padding: 30px;
    border: 1px solid #f1f1f1;
    width: 641px;
    height: 730px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      margin: 1rem;
      font-size: 40px;
    }

    .item {
      display: flex;
      flex-direction: column;
      margin: 0.6rem 0;
      label {
        margin: 0.4rem 0;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }

      input,
      textarea {
        width: 272px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 10px;
        padding-left: 5px;
        outline: none;
      }

      textarea{
        height: 100px;
      }
    }

    .inputfile {

      .fileclick {
        text-align:center;
        padding:3%;
        border:thin solid black;
        width: 272px;
        background: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 10px;
        outline: none;
      }

      input {
        display: none;
      }
      label {
        cursor:pointer;
        display: flex;
        flex-direction: column;
      }

      #imageName {
        color:green;
      }
    }
    
    #submit {
      background: #444343;
      color: #fff;
      border-radius: 50px;
      border: none;
      padding: 1rem 2.5rem;
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

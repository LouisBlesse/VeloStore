<template>
  <div class="home">
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div id="showcase" :style="backgroundImage">
      <div>
        <h1>Bienvenue sur VéloStore</h1>
      </div>
      <div>
        <p>
          VéloStore est une plateforme permettant aux particuliers d'acheter et de vendre des vélos.<br />
          Cet outil est développé dans un but éducatif et convient à donner des
          suggestions non exhaustives.<br />
        </p>
      </div>
    </div>
    <section>
      <div id="us">
        <h3>Qui sommes-nous ?</h3>
        <div class="element content">
          <article>
            Nous sommes une équipe de 8 étudiants en cursus ingénieur à EFREI
            Paris.<br />Nous aspirons à proposer VéloStore un site qui vous permet de trouver facilement le vélo de vos rêves.<br />
            Notre devise : "Des outils pour tous, un monde meilleur."
          </article>
          <aside>
            <img id="who" src="../assets/pokemon.jpg" alt="img" />
          </aside>
        </div>
      </div>
      <div id="about">
        <h3>Ce que propose VéloStore</h3>
        <div class="element">
          <h4>Vendre son vélo</h4>
          <div class="content">
            <aside>
              <img src="../assets/bike4.jpg" alt="img" />
            </aside>
            <article>
              Avec VéloStore, vendre son vélo n'a jamais été aussi simple et rapide. En 3 clics, votre annonce est publiée et sera visible sur l'un des plus gros marché de vélo du monde.
              Bénéficiez d'un suivi de vos ventes et d'un paiement instantané.
            </article>
          </div>
        </div>
        <div class="element">
          <h4>Un choix illimité</h4>
          <div class="content">
            <article>
              Trouvez votre perle rare parmi un immense choix de vélo entièrement alimenté par la communauté.
              Entrez facilement en contact avec les autres utilisateurs si vous avez la moindre question.
            </article>
            <aside>
              <img src="../assets/bike3.jpg" alt="img" />
            </aside>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getStorage, ref as refStore, getDownloadURL } from "firebase/storage";

export default {
  methods: {
    getImage(id, key) {
      const storage = getStorage();
      console.log("key : " + key);
      var res;getDownloadURL(
        refStore(storage, "gs://velostore-124cf.appspot.com/" + key)
      )
        .then((url) => {
          // This can be downloaded directly:

        })
        .catch((error) => {
          // Handle any error
          console.log(error)
        })
    },
  },
  computed: {
    backgroundImage (id) {
      return `background-image: no-repeat url("https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg");`;
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Open sans", Helvetica, sans-serif;
}

#showcase {
  background: no-repeat url("../assets/bike2.png");
  background-size: cover;
  height: calc(93vh);
  color: #fff;
  text-shadow: 0px 0px 10px #000;
  padding: 3em;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 80px;
  text-align: center;
  margin-bottom: 80px;
  font-family: "Montserrat", Helvetica, sans-serif;
}

#showcase p {
  font-size: 20px;
  text-align: center;
}

h3 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  font-family: "Roboto", Helvetica, sans-serif;
}

section .element {
  margin: auto 20%;
}

section .content {
  display: flex;
}

article,
aside {
  font-variant:initial;
  font-size: 18px;
  flex: 1;
}

aside img {
  width: 100%;
  border-radius: 4px;
}

section article,
section aside {
  margin: 20px;
}

section article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#us {
  /* background-color:oldlace; */
  padding: 50px 0;
}

#about {
  /* background-color:oldlace; */
  background-color: #efefef;
  padding: 50px 0;
}

#about div,
#us div {
  padding: 10px 0;
}

h4 {
  padding-top: 30px;
  font-size: 30px;
}
</style>


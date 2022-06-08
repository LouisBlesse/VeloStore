<template>
  <div>
    <section>
      <h2 id="mespokémons">Mes Pokémons</h2>
      <form @submit.prevent="updateProfil">
        <h1>Connexion</h1>

        <label><b>Nom d'utilisateur ou E-mail</b></label>
        <input
          type="text"
          v-model="user.username"
          placeholder="Entrer le nom d'utilisateur"
          name="username"
          required
        />
        <label><b>Mot de passe</b></label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Entrer le mot de passe"
          name="password"
          required
        />
        <label><b>Email</b></label>
        <input
          type="email"
          v-model="user.email"
          placeholder="Entrer l'email"
          name="email"
          required
        />

        <div>
          <p id="errorLogInMessage"></p>
        </div>

        <input type="submit" id="submit" value="Connexion" />
      </form>
    </section>
  </div>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    team: { type: Object },
    connected: { type: Boolean },
  },
  components: {
    Navbar,
  },
  data() {
    return {
      editingNickname: {
        id: -1,
        nickname: "",
      },
    };
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
    editNickname(pokemon) {
      this.editingNickname.id = pokemon.teamid;
      this.editingNickname.nickname = pokemon.nickname;
    },
    sendEditNickname() {
      this.$emit("update-nickname", this.editingNickname);
      this.abortEditNickname();
    },
    abortEditNickname() {
      this.editingNickname = {
        id: -1,
        nickname: "",
      };
    },
    removeFromPc(pokemonId) {
      this.$emit("remove-from-pc", pokemonId);
    },
  },
};
</script>

<style scoped>
section article {
  color: rgba(2, 1, 0, 0.726);
  margin: 0 10%;
  background-color: #eeeeee;
  border-radius: 40px;
}

#mespokémons {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 35px;
  margin: 0;
  font-weight: 600;
  position: relative;
  left: 3em;
}

button {
  border-color: black;
  background-color: gold;
  font-weight: 600;
  font-variant: small-caps;
  border-radius: 10px;
}

div#first {
  background-color: rgb(187, 170, 170);
}

div#first div {
  display: inline-block;
  width: 48%;
}

div#first div.gauche {
  background-color: rgb(185, 178, 178);
}

div#first div.droite {
  vertical-align: top;
}

div#first div h6,
h3,
input {
  margin-left: 35px;
  margin-bottom: 10px;
}

.pokemon-content {
  display: flex;
}

section .pokemon-img {
  width: 80px;
  height: 80px;
  background-size: cover;
}

section .type {
  height: 15px;
  width: 70px;
}

section .pokemon-type {
  display: flex;
  align-items: center;
  margin: 0 20px;
}

section .pokemon-type-img {
  display: flex;
  width: 140px;
}

section .pokemon-button {
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 10px;
  border: 10px;
}

article h2 {
  font-size: 20px;
}

article h3 {
  font-size: 18px;
}
</style>

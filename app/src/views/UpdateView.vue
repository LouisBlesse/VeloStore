<template>
  <div class="update">
    <section>
      <form @submit.prevent="update">
        <h1>Modification du profil</h1>

        <label><b>Email</b></label>
        <input
          type="email"
          v-model="user.email"
          placeholder="Entrer l'email"
          name="email"
          required
        />
        <label><b>Password</b></label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Entrer le password"
          name="password"
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
// import { auth } from "../firebase/config";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";

export default {
  name: "UpdateView",
  data() {
    return {
      user: {
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async update() {
      const auth = getAuth();

      if (this.email !== "") {
        updateEmail(auth.currentUser, this.user.email).then(() => {
          console.log("good ");
        });
      }

      if (this.password !== "") {
        const user = auth.currentUser;
        console.log(user);
        const newPassword = this.user.password;

        updatePassword(user, newPassword).then((data) => {
          console.log(data);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.update {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 7vh);
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  padding: 30px;
  border: 1px solid #f1f1f1;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2px;
}

form div + div {
  margin-top: 1.5em;
}

input[type="submit"] {
  background-color: #e59c3a;
  color: white;
  padding: 14px 20px;
  margin: 20px 0 8px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e59c3a;
}

input[type="submit"]:hover {
  background-color: white;
  color: #e59c3a;
  border: 1px solid #e59c3a;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  color: black;
  width: 125px;
  text-align: right;
}

input,
textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

form div input {
  height: 30px;
  border-radius: 3px;
}

input:focus,
textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

form div {
  margin: 20px;
}

p {
  color: red;
}
</style>

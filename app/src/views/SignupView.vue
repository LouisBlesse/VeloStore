<template>
  <div>
    <section>
      <div id="container">
        <form @submit.prevent="register">
          <h1>Inscription</h1>

          <div class="item">
            <label for="pseudo">Pseudo* </label>
            <input
              type="text"
              id="username"
              placeholder="Saisir le pseudo"
              v-model="newUser.username"
              required
            />
          </div>
          <div class="item">
            <label for="email">E-mail* </label>
            <input
              type="email"
              id="email"
              placeholder="Saisir l'email"
              v-model="newUser.email"
              required
            />
          </div>
          <div class="item">
            <label for="name">Mot de passe* </label>

            <input
              type="password"
              placeholder="Saisir le mot de passe"
              id="password"
              v-model="newUser.password"
              autocomplete="on"
              required
            />
          </div>

          <div>
            <p id="errorSignUpMessage"></p>
          </div>

          <input type="submit" id="submit" value="S'inscrire" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { app } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export default {
  components: {},
  props: {},
  data() {
    return {
      newUser: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    writeUserData(userId, name, email, password) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        password: password,
      });
    },

    async register() {
      const auth = getAuth(app);

      createUserWithEmailAndPassword(
        auth,
        this.newUser.email,
        this.newUser.password
      )
        .then((data) => {
          console.log("succefully sign in");
          const user = data.user.uid;
          this.writeUserData(
            user,
            this.newUser.username,
            this.newUser.email,
            this.newUser.password
          );

          this.$router.push("/loginview");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              alert("Email already in use");
              break;
            case "auth/invalid-email":
              alert("Invalid email");
              break;
            case "auth/operation-not-allowed":
              alert("Operation not allowed");
              break;
            case "auth/weak-password":
              alert("Weak password");
              break;
            default:
              alert("Something went wrong");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #fff;
  height: calc(100vh - 6vh);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";

  #container {
    form {
      padding: 30px;
      border: 1px solid #f1f1f1;
      width: 641px;
      height: 480px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        display: flex;
        flex-direction: column;
        margin: 0.6rem 0;

        label {
          margin: 0.4rem 0;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
        }

        input {
          width: 272px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dddddd;
          border-radius: 10px;
          padding-left: 5px;
          outline: none;
        }
      }

      h1 {
        text-align: center;
        margin: 1rem;
        font-size: 40px;
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
}
</style>

<template>
  <div class="login">
    <section>
      <div id="container">
        <form @submit.prevent="login">
          <h1>Connexion</h1>
          <div class="item">
            <label><b>E-mail</b></label>
            <input
              type="text"
              v-model="user.username"
              placeholder="Entrer le nom d'utilisateur"
              name="username"
              required
            />
          </div>
          <div class="item">
            <label><b>Mot de passe</b></label>
            <input
              type="password"
              v-model="user.password"
              placeholder="Entrer le mot de passe"
              name="password"
              required
            />
          </div>

          <div>
            <p id="errorLogInMessage"></p>
          </div>

          <input type="submit" id="submit" value="Connexion" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          this.user.username,
          this.user.password
        );
        this.$store.state.connexion = true;
        this.$router.push("/listview");
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Something went wrong");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  // background: linear-gradient(#071e38, #040614);
  background-color: #fff;
  height: calc(100vh - 6vh);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";

  form {
    padding: 30px;
    border: 1px solid #f1f1f1;
    width: 641px;
    height: 397px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      margin: 1rem;
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

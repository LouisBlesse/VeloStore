<template>
  <div class="update">
    <section>
      <form @submit.prevent="update">
        <h1>Modification du profil</h1>
        <div class="item">
          <label><b>Email</b></label>
          <input
            type="email"
            v-model="user.email"
            placeholder="Entrer l'email"
            name="email"
            required
          />
        </div>
        <div class="item">
          <label><b>Password</b></label>
          <input
            type="password"
            v-model="user.password"
            placeholder="Entrer le password"
            name="password"
            required
          />
        </div>
        <div class="item">
          <label><b>Pseudo</b></label>
          <input
            type="text"
            v-model="user.username"
            placeholder="Entrer le pseudo"
            name="username"
            required
          />
        </div>

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
    height: 457px;
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

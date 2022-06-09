<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-show="!this.$store.state.connexion" to="/loginview"
        >Login</router-link
      >
      <router-link v-show="!this.$store.state.connexion" to="/signupview"
        >Signup</router-link
      >

      <router-link v-show="this.$store.state.connexion" to="/updateview"
        >Updateview</router-link
      >
      <router-link v-show="this.$store.state.connexion" to="/wishlist"
        >Wish List</router-link
      >
      <router-link v-show="this.$store.state.connexion" to="/cartview"
        >Cart View</router-link
      >
      <router-link @click="logout" v-show="this.$store.state.connexion" to="/"
        >Logout</router-link
      >
    </nav>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    async logout() {
      const auth = getAuth();

      await signOut(auth);
      this.$store.state.connexion = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
  height: 7vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 0.4rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

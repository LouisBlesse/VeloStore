<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <div>
        <router-link v-show="!this.$store.state.connexion" to="/loginview"
          ><font-awesome-icon class="icon-user" icon="user" />
          Login</router-link
        >
        <router-link v-show="!this.$store.state.connexion" to="/signupview"
          ><font-awesome-icon
            class="icon-user"
            icon="user"
          />Signup</router-link
        >
        <router-link v-show="this.$store.state.connexion" to="/listview"
          ><font-awesome-icon icon="bicycle" /> Bike List</router-link
        >

        <router-link v-show="this.$store.state.connexion" to="/wishlist"
          ><font-awesome-icon icon="heart" /> Liste de souhaits</router-link
        >
        <router-link v-show="this.$store.state.connexion" to="/cartview"
          ><font-awesome-icon icon="cart-shopping" />
          Panier
        </router-link>
        <router-link v-show="this.$store.state.connexion" to="/updateview"
          ><font-awesome-icon class="icon-user" icon="user" />modification
          profil</router-link
        >
        <router-link
          @click="logout"
          v-show="this.$store.state.connexion"
          to="/loginview"
          ><font-awesome-icon icon="arrow-right-from-bracket" />
          Logout</router-link
        >
      </div>
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
  justify-content: space-between;
  align-items: center;

  .icon-user {
    margin: 0 0.2rem;
  }

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

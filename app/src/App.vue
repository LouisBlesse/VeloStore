<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>

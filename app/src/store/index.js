import { createStore } from "vuex";

export default createStore({
  state: {
    connexion: false,

    cart: [],
  },
  getters: {},
  mutations: {
    addToWishList(state, payload) {
      state.wishlist.push(payload);
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    addToProducts(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {},
  modules: {},
});

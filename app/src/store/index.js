import { createStore } from "vuex";

export default createStore({
  state: {
    connexion: false,
    products: [
      {
        id: 0,
        name: "vélo1",
        image:
          "https://www.amsterdamair.fr/85782-large_default/velo-electrique-double-dutch-steps-avec-moteur-pedalier.jpg",
        price: 50,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nesciuntcumque impedit veniam repellendus sint suscipit soluta. Repellendus rem, iste molestias sint sunt ipsam fuga iusto, dolor ratione maxime harum?",
        author: "aymeric maillot",
      },
      {
        id: 1,
        name: "vélo1",
        image:
          "https://i.pinimg.com/originals/28/6d/67/286d67c7395db9f26331ad40c74678c2.jpg",
        price: 40,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nesciuntcumque impedit veniam repellendus sint suscipit soluta. Repellendus rem, iste molestias sint sunt ipsam fuga iusto, dolor ratione maxime harum?",
        author: "aymeric maillot",
      },
      {
        id: 2,
        name: "vélo1",
        image:
          "https://static1.altermove.com/32185-large_default/velo-electrique-de-ville-hollandais-e-u4-solid-7v.jpg",
        price: 35,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nesciuntcumque impedit veniam repellendus sint suscipit soluta. Repellendus rem, iste molestias sint sunt ipsam fuga iusto, dolor ratione maxime harum?",
        author: "aymeric maillot",
      },
    ],
    wishlist: [],
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

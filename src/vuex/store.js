import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isExist = false;
        state.cart.map((item) => {
          if (item.id === product.id) {
            isExist = true;
            // eslint-disable-next-line no-param-reassign
            item.count += 1;
          }
          return item;
        });
        if (!isExist) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return api.get('products').then((products) => {
        commit('SET_PRODUCTS', products.data);
        return products;
      })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_PRODUCT({ commit }, index) {
      commit('REMOVE_PRODUCT', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;

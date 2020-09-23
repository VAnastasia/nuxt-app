import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Пуф BOSS',
        image: '1.jpg',
        price: 9999,
        description: '',
        size: '75x75',
        color: 'Графит',
        category: 'Пуф',
      },
      {
        id: 3,
        name: 'Пуф BOSS',
        image: '3.jpg',
        price: 9999,
        description: '',
        size: '75x75',
        color: 'Бежевый',
        category: 'Пуф',
      },
      {
        id: 4,
        name: 'Пуф BOSS',
        image: '4.jpg',
        price: 9999,
        description: '',
        size: '75x75',
        color: 'Песочный',
        category: 'Пуф',
      },
      {
        id: 5,
        name: 'Пуф BOSS',
        image: '5.jpg',
        price: 9999,
        description: '',
        size: '75x75',
        color: 'Индиго',
        category: 'Пуф',
      },
      {
        id: 6,
        name: 'DANDY',
        image: '6.jpg',
        price: 12999,
        description: '',
        size: '106x102',
        color: 'Серый',
        category: 'Кресло',
      },
      {
        id: 7,
        name: 'DANDY',
        image: '7.jpg',
        price: 12999,
        description: '',
        size: '106x102',
        color: 'Синий',
        category: 'Кресло',
      },
      {
        id: 8,
        name: 'DANDY',
        image: '8.jpg',
        price: 12999,
        description: '',
        size: '106x102',
        color: 'Шоколадный',
        category: 'Кресло',
      },
      {
        id: 9,
        name: 'DANDY',
        image: '9.jpg',
        price: 12999,
        description: '',
        size: '106x102',
        color: 'Медовый',
        category: 'Кресло',
      },
      {
        id: 10,
        name: 'МАДРИД',
        image: '10.jpg',
        price: 13999,
        description: '',
        size: '200x90',
        color: 'Газета',
        category: 'Прямой диван',
      },
      {
        id: 11,
        name: 'МАДРИД',
        image: '11.jpg',
        price: 13999,
        description: '',
        size: '200x90',
        color: 'Бежевый',
        category: 'Прямой диван',
      },
      {
        id: 12,
        name: 'МАДРИД',
        image: '12.jpg',
        price: 13999,
        description: '',
        size: '200x90',
        color: 'Серый',
        category: 'Прямой диван',
      },
      {
        id: 13,
        name: 'АТЛАНТА',
        image: '13.jpg',
        price: 16999,
        description: '',
        size: '220x105',
        color: 'Бежевый',
        category: 'Прямой диван',
      },
      {
        id: 14,
        name: 'АТЛАНТА',
        image: '14.jpg',
        price: 16999,
        description: '',
        size: '220x105',
        color: 'Серый',
        category: 'Прямой диван',
      },
      {
        id: 15,
        name: 'АТЛАНТА',
        image: '15.jpg',
        price: 16999,
        description: '',
        size: '220x105',
        color: 'Синий',
        category: 'Прямой диван',
      },
      {
        id: 16,
        name: 'АТЛАНТА',
        image: '16.jpg',
        price: 16999,
        description: '',
        size: '220x105',
        color: 'Белый',
        category: 'Прямой диван',
      },
      {
        id: 17,
        name: 'МАРСЕЛЬ',
        image: '17.jpg',
        price: 24999,
        description: '',
        size: '260x165',
        color: 'Песочный',
        category: 'Угловой диван',
      },
      {
        id: 18,
        name: 'МАРСЕЛЬ',
        image: '18.jpg',
        price: 24999,
        description: '',
        size: '260x165',
        color: 'Шоколадный',
        category: 'Угловой диван',
      },
      {
        id: 19,
        name: 'МАРСЕЛЬ',
        image: '19.jpg',
        price: 24999,
        description: '',
        size: '260x165',
        color: 'Графит',
        category: 'Угловой диван',
      },
      {
        id: 20,
        name: 'ДУБАЙ',
        image: '20.jpg',
        price: 29999,
        description: '',
        size: '300x155',
        color: 'Бежевый',
        category: 'Угловой диван',
      },
      {
        id: 21,
        name: 'ДУБАЙ',
        image: '21.jpg',
        price: 29999,
        description: '',
        size: '300x155',
        color: 'Графит',
        category: 'Угловой диван',
      },
      {
        id: 22,
        name: 'ДУБАЙ',
        image: '22.jpg',
        price: 29999,
        description: '',
        size: '300x155',
        color: 'Шоколадный',
        category: 'Угловой диван',
      },
    ],
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
    INCREMENT: (state, index) => {
      state.cart[index].count += 1;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].count > 1) {
        state.cart[index].count -= 1;
      }
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
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index);
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

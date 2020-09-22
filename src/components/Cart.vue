<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="cart__back">Вернуться в каталог</div>
    </router-link>
    <h2>Корзина</h2>
    <p v-if="!cartData.length">В корзине пусто</p>
    <cart-item
      v-for="(item, index) in cartData"
      :key="item.id"
      :cartItem="item"
      @deleteProduct="deleteProduct(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <p class="cart__total" v-if="cartData.length">
      <span>Итого: </span>
      {{parseInt(cartTotalSum).toLocaleString('de-DE')}} &#8381;
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions([
      'DELETE_PRODUCT',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteProduct(index) {
      this.DELETE_PRODUCT(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  computed: {
    cartTotalSum() {
      const result = this.cartData.reduce((acc, item) => {
        console.log(item.price * item.count, acc);
        return item.price * item.count + acc;
      }, 0);
      return result;
    },
  },
};
</script>

<style lang="scss">
  .cart__total {
    font-size: 24px;
    color: red;
    font-weight: bold;
    text-align: right;

    span {
      font-weight: normal;
      font-size: 16px;
    }
  }

  .cart__back {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 16px;
    border: 1px solid #dedede;
  }
</style>

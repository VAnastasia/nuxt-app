<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__cart-count">Вернуться в каталог</div>
    </router-link>
    <h2>Корзина</h2>
    <p v-if="!cartData.length">В корзине пусто</p>
    <cart-item
      v-for="(item, index) in cartData"
      :key="item.id"
      :cartItem="item"
      @deleteProduct="deleteProduct(index)"
    />
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
    ]),
    deleteProduct(index) {
      this.DELETE_PRODUCT(index);
    },
  },
};
</script>

<style>

</style>

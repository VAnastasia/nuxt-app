<template>
  <div class="cart">
    <h3>Корзина</h3>
    <cart-item v-for="item in cartData" :key="item.id" :cartItem="item" />
  </div>
</template>

<script>
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
};
</script>

<style>

</style>

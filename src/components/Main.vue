<template>
  <div class="main">
    <h2>{{title}}</h2>
    <cart
      v-if="CART.length"
      :cartData="CART"
    />
    {{CART.length}}
    <catalog />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Catalog from './Catalog.vue';
import Cart from './Cart.vue';

export default {
  name: 'Main',
  components: {
    Catalog,
    Cart,
  },
  props: {

  },
  data() {
    return {
      title: 'Диваны и кресла',
    };
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss">
  .main {
    max-width: 1024px;
    min-width: 900px;
    margin: 0 auto;
  }

  .btn {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1b1818;
    font-size: 20px;
    line-height: 20px;;
  }
</style>

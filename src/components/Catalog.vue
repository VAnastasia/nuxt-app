<template>
  <div>
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="catalog__cart-count">{{CART.length}}</div>
    </router-link>
    <div class="catalog">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        :item="product"
        @getId="getId"
        @addToCart="addToCart"
      />
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from './CatalogItem.vue';

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
  },
  data() {
    return {};
  },
  mounted() {
    this.GET_PRODUCTS();
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_TO_CART',
    ]),
    getId(id) {
      console.log(id);
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ]),
  },
};
</script>

<style lang="scss">
  .catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .catalog__cart-count {
    position: absolute;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
    padding: 16px;
    border: 1px solid #dedede;
  }
</style>

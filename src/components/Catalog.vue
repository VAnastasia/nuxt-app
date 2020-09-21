<template>
  <div class="catalog">
    <catalog-item
      v-for="product in PRODUCTS"
      :key="product.id"
      :item="product"
      @getId="getId"
      @addToCart="addToCart"
    />
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
</style>

<template>
  <div>
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="catalog__cart-count">
        <p><span>{{CART.length}}</span></p>
      </div>
    </router-link>
    <v-select
      :selected="selected"
      :options="categories"
      @select="filterCategories"
    />
    <div class="catalog">
      <catalog-item
        v-for="product in products"
        :key="product.id"
        :item="product"
        @addToCart="addToCart"
      />
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from './CatalogItem.vue';
import VSelect from './VSelect.vue';

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    VSelect,
  },
  data() {
    return {
      categories: [
        { name: 'Все', value: 'category-all' },
        { name: 'Пуфы и кресла', value: 'category-1' },
        { name: 'Прямые диваны', value: 'category-2' },
        { name: 'Угловые диваны', value: 'category-3' },
      ],
      selected: 'Все',
      filtredProducts: [],
    };
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
    filterCategories(category) {
      this.filtredProducts = this.PRODUCTS.filter((item) => item.category === category.name);
      this.selected = category.name;
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
    ]),
    products() {
      if (this.filtredProducts.length > 0) {
        return this.filtredProducts;
      }
      return this.PRODUCTS;
    },
  },
};
</script>

<style lang="scss">
  .catalog {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .catalog__cart-count {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
    background-image: url('/images/basket.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;

    p {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -5px;
      left: -5px;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: red;
      color: #ffffff;
      font-size: 10px;
      line-height: 20px;
    }
  }
</style>

<template>
  <div class="catalog-item" @click="getId">
    <img class="catalog-item__image" :src="require(`../assets/images/${item.image}`)" alt="">
    <div class="catalog-item__bottom">
      <p class="catalog-item__name">{{item.name}}</p>
      <p class="catalog-item__price">{{parseInt(item.price).toLocaleString('de-DE')}} &#8381;</p>
      <button class="btn" @click="addToCart">+</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getId() {
      this.$emit('getId', this.item);
    },
    addToCart() {
      this.$emit('addToCart', this.item);
    },
  },
};
</script>

<style lang="scss">
  .catalog-item {
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-bottom: 16px;
    width: 32%;
  }

  .catalog-item__image {
    width: 100%;
    display: block;
  }

  .catalog-item__bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 0 16px 16px 16px;
  }

  .catalog-item__name {
    margin: 0;
    margin-right: 15px;
  }

  .catalog-item__price {
    margin: 0;
    margin-right: 15px;
    color: red;
    font-weight: bold;
  }
</style>

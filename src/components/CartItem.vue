<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require(`../assets/images/${cartItem.image}`)" alt="">
    <div class="cart-item__description">
      <p>{{cartItem.name}}</p>
      <p>{{cartItem.size}}</p>
      <p>{{cartItem.color}}</p>
    </div>
    <div class="cart-item__info">
      <div class="cart-item__count-block">
        <button class="btn" @click="decrement">-</button>
        <div class="cart-item__count">{{cartItem.count}}</div>
        <button class="btn" @click="increment">+</button>
      </div>

      <a class="cart-item__delete" @click="deleteProduct">Удалить</a>
      <p class="cart-item__price">{{parseInt(cartItem.price).toLocaleString('de-DE')}} &#8381;</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.$set(this.cartItem, 'count', 1);
  },
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct');
    },
    decrement() {
      this.$emit('decrement');
    },
    increment() {
      this.$emit('increment');
    },
  },
};
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #dedede;
  }

  .cart-item__info {
    width: 10%;
    text-align: right;
  }

  .cart-item__count-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .cart-item__description {
    width: 50%;
    text-align: left;
  }

  .cart-item__quantity {
    display: flex;
  }

  .cart-item__image {
    width: 20%;
  }

  .cart-item__price {
    font-size: 24px;
  }

  .cart-item__delete {
    cursor: pointer;
    text-decoration: underline;
  }
</style>

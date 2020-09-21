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
        <button class="btn">-</button>
        <div class="cart-item__count">1</div>
        <button class="btn">+</button>
      </div>

      <button>Удалить</button>
      <p>{{cartItem.price}}</p>
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
  }

  .cart-item__description {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    width: 50%;
    text-align: left;
  }

  .cart-item__quantity {
    display: flex;
  }

  .cart-item__image {
    width: 20%;
  }
</style>

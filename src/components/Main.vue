<template>
  <div class="main">
    <h2>{{title}}</h2>
    <catalog />
    <cart />
  </div>
</template>

<script>
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
      title: 'Main',
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log('mounted');
  },
};
</script>

<style>

</style>

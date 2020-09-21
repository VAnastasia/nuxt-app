<template>
  <div class="main">
    <h2>{{title}}</h2>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      title: 'Диваны и кресла',
    };
  },
  computed: {

  },
  methods: {},
  watch: {},
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
    line-height: 20px;
    vertical-align: center;
  }
</style>

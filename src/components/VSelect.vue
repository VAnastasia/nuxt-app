<template>
  <div class='select'>
    <p
      class="title"
      @click="visible = !visible"
    >{{selected}}</p>
    <div
        class="options"
        v-if="visible || isExpanded"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: '',
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.visible = false;
    },
    hideSelect() {
      this.visible = false;
    },
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect);
  },
};
</script>

<style>
  .select {
    position: relative;
    z-index: 5;
    width: 200px;
    cursor: pointer;
    text-align: left;
  }

  .title {
    border: solid 1px #aeaeae;
    padding: 8px;
  }

  .select p {
    margin: 5px 0;
    padding: 10px;
  }

  .options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
  }

  .options p:hover {
    background: #e7e7e7;
  }
</style>

<template>
  <div @click="clicked" class="btn-wrapper">
    <div class="btn">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
      clicked() {
          this.$emit("clicked", this.value);
      }
  }
};
</script>

<style scoped>
.btn-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
}

.btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-wrapper:hover {
  background-color: rgba(0,0,0,0.1);
  cursor:pointer;
}
</style>
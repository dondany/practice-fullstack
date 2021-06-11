<template>
  <div class="calc-wrapper">
    <h1 class="header"> - Calculator - </h1>
    <Calc />
  </div>
</template>

<script>
import Calc from "./Calc";

export default {
  components: {
    Calc,
  },
};
</script>

<style scoped>
.calc-wrapper {
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0);
}
</style>
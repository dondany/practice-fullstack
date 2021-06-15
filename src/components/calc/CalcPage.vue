<template>
<div class="container">
  <div class="calc-wrapper">
    <h1 class="header"> - Calculator - </h1>
    <Calc />
  </div>
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
.container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #343535;
}

.calc-wrapper {
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -0);
}
</style>
<template>
  <div @click="toggle" class="field-wrapper">
    <i v-if="player === 'x'" class="symbol fas fa-times fa-2x" />
    <i v-if="player === 'o'" class="symbol far fa-circle fa-2x" />
  </div>
</template>

<script>
export default {
  emits: ["toggled"],
  props: ["player", "id"],
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggle() {
      if (!this.isToggled) {
        this.$emit("toggled", this.id);
        this.isToggled = true;
      }
    },
  },
  watch: {
    player: function (newValue) {
      if (newValue === "") {
        this.isToggled = false;
      }
    },
  },
};
</script>

<style>
.field-wrapper {
  width: 80px;
  height: 80px;
  background-color: #ffb703;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
.field-wrapper:hover {
  transform: scale(1.05);
}
.symbol {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.fa-times {
  color: #fff;
}

.fa-circle {
  color: #fff;
}
</style>
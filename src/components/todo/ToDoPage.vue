<template>
  <div class="container">
    <div class="to-do-list">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
.container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #343535;
}

.to-do-list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

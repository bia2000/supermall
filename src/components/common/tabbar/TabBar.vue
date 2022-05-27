<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TaBbar',
}
</script>

<style scoped>
#tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e3e3e3;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>

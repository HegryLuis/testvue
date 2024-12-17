<template>
  <span class="wrapper-text" :class="textClass">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: String,
    textClass: String,
  },
};
</script>

<style></style>

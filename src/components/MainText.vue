<template>
  <div class="main">
    <span class="main-text" :style="animatedText">FULL-CYCLE EVENT AGENCY</span>
  </div>
</template>

<script>
import { onUnmounted, ref } from "vue";

export default {
  setup() {
    const animatedText = ref({
      transform: "translate(0, 0)",
    });

    const handleMouseMove = (event) => {
      const offsetX = (event.clientX / window.innerHeight - 0.5) * 10;
      const offsetY = (event.clientY / window.innerWidth - 0.5) * 10;

      animatedText.value = {
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    onUnmounted(() => {
      window.removeEventListener("mousemove", handleMouseMove);
    });

    return { animatedText };
  },
};
</script>

<style></style>

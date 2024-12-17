<template>
  <div class="header">
    <div class="sticker">
      👅
      <language-selector />
    </div>
    <div class="logo-container">
      <img src="@/assets/Union.png" class="logo-image" alt="Logo" />
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";

export default {
  components: {
    LanguageSelector,
  },
};
</script>

<style></style>

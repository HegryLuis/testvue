<template>
  <div class="wheel">
    <div v-for="(word, index) in letters" :key="index" class="wheel__inner">
      <div class="wheel__content-wrapper">
        <div
          v-for="(letter, letterIndex) in word.split('')"
          :key="letterIndex"
          class="wheel__content"
        >
          {{ letter }}
        </div>
      </div>
    </div>
    <div class="wheel__center"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letters: "showreel ".repeat(3).trim().split(" "),
    };
  },
};
</script>

<style></style>

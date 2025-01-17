<template>
  <div class="container" data-barba="container" data-barba-namespace="home">
    <AppHeader />
    <MainText />
    <div class="background-text">
      <h1 class="bg-text bg-text-left">
        FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
      </h1>
      <h1 class="bg-text bg-text-right">
        FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
      </h1>
    </div>
    <EventWheel />
    <WrapperText text="What?" textClass="what" @click="navigateTo('/second')" />
    <WrapperText
      text="Where?"
      textClass="where"
      @click="navigateTo('/second')"
    />
    <WrapperText text="Who?" textClass="who" @click="navigateTo('/second')" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import MainText from "../components/MainText.vue";
import EventWheel from "../components/EventWheel.vue";
import WrapperText from "../components/WrapperText.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    AppHeader,
    MainText,
    EventWheel,
    WrapperText,
  },
  setup() {
    const router = useRouter();

    const navigateTo = (path) => {
      router.push(path);
    };

    return { navigateTo };
  },
};
</script>

<template>
  <div>{{ myValue.value }}</div>
  <div @click="goUp">Click me</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const myValue = ref({
      value: 0
    });
    return {
      myValue
    };
  },
  methods: {
    goUp() {
      console.log("goUp -> this.$data", this);
      gsap.to(this.myValue, { duration: 1, value: 100 });
    }
  }
});
</script>

<style scoped>
.example {
  width: 300px;
  height: 300px;
  border: 2px dotted blue;
}
.example {
  position: relative;
  width: 80vw;
  height: 60vh;
}
.inside {
  width: 70px;
  height: 70px;
  font-size: 0.5rem;
  border: 1px dotted pink;
}
.foreign {
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px dotted green;
  width: 80%;
  height: 80%;
}
</style>

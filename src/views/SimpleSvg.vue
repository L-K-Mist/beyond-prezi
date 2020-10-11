<template>
  <svg :viewBox="viewBox" class="example">
    <circle r="50" cx="50" cy="50"></circle>
    <foreignObject class="foreign" x="20" y="20">
      <hello-world xmlns="http://www.w3.org/1999/xhtml"></hello-world>
    </foreignObject>
  </svg>
  <div class="slidecontainer">
    <p>Default range slider:</p>
    <input type="range" min="-100" max="100" v-model="left" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const left = ref(0);
    const right = ref(0);
    const viewBox = computed(() => `${left.value} ${right.value} 50 50`);
    watch(viewBox, viewBox => {
      console.log("setup -> viewBox", viewBox);
    });
    watch(left, left => {
      console.log("setup -> left", left);
    });
    return {
      viewBox,
      left,
      right
    };
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
  width: 80vw;
  height: 80vh;
}
.inside {
  width: 70px;
  height: 70px;
  font-size: 0.5rem;
  border: 1px dotted pink;
}
.foreign {
  border: 1px dotted green;
  width: 80%;
  height: 80%;
}
</style>

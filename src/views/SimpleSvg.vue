<template>
  <svg :viewBox="viewBox" class="example">
    <foreignObject class="foreign" x="50" y="50">
      <hello-world xmlns="http://www.w3.org/1999/xhtml"></hello-world>
    </foreignObject>
  </svg>
  <div class="slidecontainer">
    <p>Left-Right</p>
    <input type="range" min="-100" max="100" v-model="left" />
    <p>Up-Down</p>
    <input type="range" min="-100" max="100" v-model="right" />
    <p>Zoom-One</p>
    <input type="range" min="0" max="200" v-model="zoomOne" />
    <p>Zoom-Two</p>
    <input type="range" min="0" max="200" v-model="zoomTwo" />
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
    const zoomOne = ref(100);
    const zoomTwo = ref(100);
    const viewBox = computed(
      () => `${left.value} ${right.value} ${zoomOne.value} ${zoomOne.value}`
    );
    watch(viewBox, viewBox => {
      console.log("setup -> viewBox", viewBox);
    });
    watch(left, left => {
      console.log("setup -> left", left);
    });
    return {
      viewBox,
      left,
      right,
      zoomOne,
      zoomTwo
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

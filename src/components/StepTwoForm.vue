<template>
  <div
    style="border: 1px dotted #0000ff00; width: 300px; height: 288px; transformOrigin: 0 0; transform: scale(0.183)"
  >
    <p>
      I am a vue form component embedded inside this SVG within it's inherently
      scalable/zoomable world.
    </p>
    <p style="font-size: 15px">
      I could therefore include a video or a map or whatever.
    </p>
    <base-input-text
      v-model="howMuchItRocks"
      label="How much does this rock!!!?"
    ></base-input-text>
    <base-button @click="$emit('save-form', howMuchItRocks)"
      >Use form inputs in app</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseInputText from "@/components/BaseComponents/BaseInputText.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";

export default defineComponent({
  name: "Home",
  components: { BaseInputText, BaseButton },
  setup() {
    const howMuchItRocks = ref("A LOT!!");
    return {
      howMuchItRocks
    };
  },
  // data() {
  //   return {
  //     howMuchItRocks: "A LOT!!!"
  //   };
  // },
  watch: {
    howMuchItRocks(value) {
      console.log("howMuchItRocks -> value", value);
    }
  }
});
</script>

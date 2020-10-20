<template>
  <div
    style="border: 1px dotted blue; width: 300px; height: 288px; transformOrigin: 0 0; transform: scale(0.183)"
  >
    <p>
      I am a vue form component embedded inside this SVG with it's zoomable
      world.
    </p>
    <base-input-text
      v-model="howMuchItRocks"
      label="How much does this rock!!!?"
    ></base-input-text>
    <base-button @click="$emit('save-form')"
      >Save to DB or Whatever</base-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInputText from "@/components/BaseComponents/BaseInputText.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";

export default defineComponent({
  name: "Home",
  components: { BaseInputText, BaseButton },
  setup() {
    return {};
  },
  data() {
    return {
      howMuchItRocks: "A LOT!!!"
    };
  }
});
</script>

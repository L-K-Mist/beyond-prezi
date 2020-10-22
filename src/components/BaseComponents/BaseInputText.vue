<template>
  <div style="transformOrigin: 0 0; transform: scale(0.5)">
    <div class="base-input">
      <label v-if="label">{{ label }}</label>
      <input
        type="text"
        :value="value"
        :style="cssVars"
        v-bind="$attrs"
        @input="updateValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false, // This is so that the placeholder attribute can be manually assigned by us to the <input> element istead of automatically attaching to the top-level div of this component.
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    inputSize: {
      type: Number,
      default: 222
    }
  },
  computed: {
    cssVars() {
      return {
        "--input-width": this.inputSize + "px"
      };
    }
  },
  methods: {
    updateValue(value) {
      console.log("updateValue -> value", value);
      this.$emit("input", value);
    }
  }
});
</script>

<style>
input {
  border: none;
  border-bottom: 1px solid #000000;
  line-height: normal;
  height: 40px;
  width: var(--input-width);
}
input:focus {
  outline: none;
}

input::placeholder {
  font-size: 18px;
  color: #a2a2a2;
  font-style: none;
  font-family: "Source Sans Pro";
  vertical-align: text-top;
  padding-top: 1px;
}

.base-input label {
  display: block;
  font-size: 20px;
}
</style>

<template>
  <button
    v-bind="$attrs"
    class="base-button"
    :class="{ block: block, [type]: true }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "black-square"
    },
    block: {
      // Allows consumer to add block attribut to element resulting in the button filling available width.  Any existing button can therefore be a block-button.
      type: Boolean,
      default: false
    }
  }
});
</script>

<style>
button {
  z-index: -1;
}
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 27px;
  text-align: center;
  /* not sure what font-weight should be, but this one is way too much compared to style guides*/
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  transition: all 0.2s linear;
  min-width: 110px;
  margin: 3px 8px;
  cursor: pointer;
}
.base-button:hover {
  /* transform: scale(1.01); */
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.base-button:active {
  transform: scale(0.9);
  box-shadow: none;
}
.base-button:focus {
  outline: 0;
}
.base-button.black-square {
  background: #0b0222;
  color: #ffffff;
  border-radius: 2px;
}
.base-button.black-rounded {
  background: #333333;
  color: #ffffff;
  border-radius: 27px;
}
.base-button.double-wide-black-rounded {
  background: #333333;
  color: #ffffff;
  border-radius: 35px;
  height: 70px;
  min-width: 270px;
  font-size: 24px;
}
.base-button.white-rounded {
  background: #ffffff;
  color: #a2a2a2;
  border-radius: 27px;
  border: #a2a2a2 2px solid;
}
.base-button.white-square {
  background: #ffffff;
  color: rgb(0, 0, 0);
  border-radius: 2px;
  border: rgb(22, 22, 22) 1px solid;
}
.base-button.block {
  width: 100%;
  margin: 6px 0;
}
/* As used in the previous-next navigator buttons. Dimensions according to Style-guide. */
.base-button.navigator-next,
.base-button.navigator-previous {
  position: relative;
  color: #ffffff;
  border-radius: 2px;
  margin: 0;
  font-size: 12px;
  width: 189px;
  height: 77px;
}

.base-button.orange-minus,
.base-button.orange-plus {
  height: 44px;
  width: 44px;
  min-width: 0px;
  margin: 0;
  border-radius: 50%;
  padding: 0px;
}
</style>

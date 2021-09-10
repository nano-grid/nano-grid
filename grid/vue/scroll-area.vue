<template>
  <div
    @scroll.passive="$emit('scroll', $event)"
    class="scroll-area"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { colorsType } from "../types/colors";

export default Vue.extend({
  props: {
    color: {
      type: String as () => colorsType,
      default: "silver",
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    itemColor(): string {
      return this.color;
    },
    classes(): Array<string> {
      return [
        this.itemColor,
        {
          "no-horizontal": !this.horizontal,
          "no-vertical": !this.vertical,
        },
      ];
    },
  },
});
</script>
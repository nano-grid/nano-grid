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

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "silver",
    },
    allowHorizontal: {
      type: Boolean,
      default: false,
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
          horizontal: this.allowHorizontal,
        },
      ];
    },
  },
});
</script>
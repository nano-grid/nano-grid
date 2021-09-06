<template>
  <component :is="tag" :class="computedClasses" />
</template>

<script lang="ts">
import Vue from "vue";
import { colorsType } from "../types/colors";
import { directionsType } from "../types/directions";

export default Vue.extend({
  props: {
    color: {
      type: String as () => colorsType,
      default: "",
    },
    tag: {
      type: String,
      default: "span",
    },
    mode: {
      type: String,
      default: "icon",
    },
    glyph: {
      type: String,
    },
    direction: {
      type: String as () => directionsType,
    },
  },
  computed: {
    itemColor(): string {
      return this.color;
    },
    computedMode(): string {
      return this.mode;
    },
    computedGlyph(): string {
      switch (this.mode) {
        case "mdi":
          return `mdi-${this.glyph}`;
        default:
          return this.glyph;
      }
    },
    computedClasses(): Array<string> {
      return [
        this.computedMode,
        this.itemColor,
        this.computedGlyph,
        this.direction,
        {
          colorized: this.color !== "",
        },
      ];
    },
  },
});
</script>

<template>
  <component :is="tag" :class="classes" :role="role">
    <template>
      <slot />
    </template>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { validateSize } from "../modules/columns-manager";
import { modalityType } from "../types/modality";

/*
    type: Bootstrap / *Custom,
    size:
    - fix size: 45                    ->  30 .. 300
    - percent: 25%                    ->  5% .. 100%
    - fractions: 25/100
    - subtraction: column 45% minus 20px: 45%-20
    - subtraction: column 4/12 minus 20px: 4/12-20
    
    using height:
    100, 50% -> width: 100px, height: 50vh
  */

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: "div",
    },
    mode: {
      type: String as () => modalityType,
      default: "column",
    },
    size: undefined,
    tableElement: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes(): Array<string> {
      return [this.mode, this.computedSize];
    },
    computedSize(): string {
      return this.size ? validateSize(this.size) : "";
    },
    role(): string {
      if (this.tableElement) {
        return "cell";
      } else {
        return "";
      }
    },
  },
});
</script>
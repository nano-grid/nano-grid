<template>
  <component
    @click.passive="$emit('click', $event)"
    class="nano-row"
    :class="classes"
    :is="tag"
    :role="role"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { breakpointsType } from "../types/breakpoints";
import { spacingType } from "../types/spacing";
import {validateSpacing} from "../modules/columns-manager"

export default Vue.extend({
  /*
    tag: ['div', 'li', 'tr' ...]
    type: ['Bootstrap', 'Custom', 'Table']
  */
  props: {
    tag: {
      type: String,
      default: "div",
    },
    breakpoint: {
      type: String as () => breakpointsType,
      default: "",
    },
    group: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: Number as () => spacingType,
      default: 0,
    },
    integrated: {
      type: Boolean,
      default: false,
    },
    tableElement: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    grid: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classes(): Array<string> {
      return [
        {
          "nano-group": this.group,
          integrated: this.integrated,
          vertical: this.vertical,
          grid: this.grid,
        },
        this.computedSpacing,
        this.breakpoint,
      ];
    },
    computedSpacing(): string {
      return validateSpacing(this.spacing);
    },
    role(): string {
      if (this.tableElement) {
        let result = "row";
        if (this.group) {
          result = "group";
        }
        return result;
      } else {
        return "";
      }
    },
  },
});
</script>
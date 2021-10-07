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
    integrate: {
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
  },
  computed: {
    classes(): Array<string> {
      return [
        {
          "nano-group": this.group,
          integrate: this.integrate,
          vertical: this.vertical,
          horizontal: !this.vertical,
        },
        this.computedSpacing,
        this.breakpoint,
      ];
    },
    computedSpacing(): string {
      let space = this.spacing;
      space = space > 400 ? 400 : space;
      space = space < 0 ? 0 : space;
      return space === 0 ? "" : `sp${space}`;
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
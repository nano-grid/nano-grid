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

type breakpoints = "" | "sm" | "md" | "lg" | "xl" | "xll";
type spacingType = 25 | 50 | 75 | 100 | 125 | 150 | 175 | 200 | 225 | 250 | 275 | 300 | 325 | 350 | 375 | 400;

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
      type: Object as () => breakpoints,
      default: "",
    },
    group: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: Object as () => spacingType,
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
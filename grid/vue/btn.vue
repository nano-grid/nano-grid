<template>
  <component
    :is="computedTag"
    :class="computedClasses"
    :role="tag === 'button' ? 'button' : undefined"
    :aria-label="computedLabel"
    :to="to"
    @click.passive="$emit('click', $event)"
  >
    <m-icon v-if="glyph !== ''" :glyph="glyph" />
    <span class="caption" v-if="computedValue">
      {{ computedValue }}
    </span>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import { colorsType } from "../types/colors";

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: "button",
    },
    glyph: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: undefined,
    },
    color: {
      type: String as () => colorsType,
      default: "gravel",
    },
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      default: undefined,
    },
  },
  computed: {
    computedValue(): any {
      return this.value;
    },
    buttonType(): string {
      if (!this.computedValue) {
        return "btn flat icon";
      } else {
        return "btn flat";
      }
    },
    itemColor(): string {
      return this.color;
    },
    computedTag(): string {
      if (this.to) {
        return "router-link";
      } else {
        return this.tag;
      }
    },
    computedLabel(): any {
      if (this.computedValue) {
        return `${this.computedValue} button`;
      } else {
        return undefined;
      }
    },
    computedClasses(): any {
      return [
        this.buttonType,
        this.itemColor,
        this.size,
        {
          active: this.active,
        },
      ];
    },
  },
});
</script>

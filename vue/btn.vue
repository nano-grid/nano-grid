<template>
  <component
    :is="computedTag"
    :class="computedClasses"
    :role="tag === 'button' ? 'button' : undefined"
    :aria-label="computedLabel"
    :to="to"
    :title="computedLabel"
    @click.passive="$emit('click', $event)"
  >
    <icon v-if="glyph !== ''" :glyph="glyph" :direction="direction" />
    <span class="caption" v-if="text">
      {{ text }}
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
    text: {
      type: [String, Number],
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    color: {
      type: String as () => colorsType,
      default: "transparent",
    },
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      default: undefined,
    },
    direction: {
      type: String,
      default: "bottom",
    },
    mode: {
      type: String,
      default: "flat",
    }
  },
  computed: {
    buttonType(): string {
      return `btn ${this.mode}`;
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
      if (this.text) {
        return undefined;
      } else {
        return this.title;
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

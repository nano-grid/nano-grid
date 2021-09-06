<template>
  <row>
    <column size="100%" v-if="label">
      <label v-html="label" />
    </column>
    <column size="100%">
      <row group>
        <prefix size="35">
          <btn
            @click="decrease()"
            size="md"
            glyph="minus"
            color="gravel"
          />
        </prefix>
        <column size="100%-35*2">
          <p class="input-label" v-html="val" />
        </column>
        <suffix size="35">
          <btn
            @click="increase()"
            size="md"
            glyph="plus"
            color="gravel"
          />
        </suffix>
      </row>
    </column>
  </row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
    increment: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    val: 0,
  }),
  mounted() {
    this.val = this.value;
  },
  methods: {
    increase() {
      this.val += this.increment;
      this.$emit("update-value", this.val);
    },
    decrease() {
      this.val -= this.increment;
      this.$emit("update-value", this.val);
    },
  },
});
</script>
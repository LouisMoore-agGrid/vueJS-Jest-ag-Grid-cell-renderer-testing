<template>
  <div>
    <span class="test">{{ value }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: null,
    };
  },
  beforeMount() {},
  mounted() {
    this.value = this.valueSquared();
  },
  methods: {
    valueSquared() {
      return this.params.value * this.params.value;
    },
  },
};
</script>

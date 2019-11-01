<template>
  <li>{{ result }}</li>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    result: {
      type: String
    }
  }
};
</script>
<style scoped>
li {
  background-color: #fefef0;
}
</style>
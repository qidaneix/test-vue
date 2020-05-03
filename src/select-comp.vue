<template>
  <div class="wrap">
    <select v-model="value">
      <option v-for="item in arr" :key="item.id" :value="item.id">{{
        item.name
      }}</option>
    </select>
    <template v-if="selectedArr.children">
      <select-comp :arr="selectedArr.children"></select-comp>
    </template>
  </div>
</template>

<script>
export default {
  props: ["arr"],
  data() {
    return {
      value: this.arr[0].id
    };
  },
  computed: {
    selectedArr() {
      let subArr = this.arr.find(item => item.id === this.value);
      if (subArr) {
        return subArr;
      }
      return false;
    }
  }
};
</script>

<style></style>

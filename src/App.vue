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
  data() {
    return {
      value: 0,
      arr: [
        {
          id: 0,
          name: "api",
          children: [
            {
              id: 2,
              name: "declare"
            },
            {
              id: 3,
              name: "gps",
              children: [
                {
                  id: 31,
                  name: "led",
                  children: [
                    {
                      id: 41,
                      name: "dns"
                    },
                    {
                      id: 42,
                      name: "cros"
                    }
                  ]
                },
                {
                  id: 32,
                  name: "mips"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "fetch",
          children: [
            {
              id: 4,
              name: "gui"
            }
          ]
        }
      ]
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

<style>
.wrap {
  display: inline-block;
  margin-left: 30px;
}
</style>

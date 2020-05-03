export const keep = new Map();

export default {
  beforeDestroy() {
    keep.set(this.$route.url, this.$data);
  },
  created() {
    if (window.keep.has(this.$route.url)) {
      this.$data = keep.get(this.$route.url);
    } else {
      this.getData();
    }
  }
};

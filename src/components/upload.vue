<!-- by your name -->
<template>
  <div>
      uoload
      <img :src="img">
       <input type="file" accept="image/*" @change="fileChanged"  ref="file" multiple="multiple">
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ""
    };
  },
  methods: {
    fileChanged() {
      const list = this.$refs.file.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(list);
      reader.onload = e => {
          console.log(e)
        this.img= e.target.result;
      };
      console.log(list);
      //this.$refs.file.value = "";
    }
  }
};
</script>
<style lang='scss' scoped>
img{
    width: 500px;
    height: auto;
}

</style>
<!-- by your name -->
<template>
  <div>
    <div class="btns">
 
      <yd-button class="addImg" size="small"  bgcolor="#000" color="#FFF" >添加照片</yd-button>
      
       <input type="file" accept="image/*" @change="fileChanged"  ref="file" multiple="multiple">
    </div>
       
      <div >
        <img :src=item alt="" v-for="item in imgs">
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs:[] 
    };
  },
  methods: {
    fileChanged() {
      const list = this.$refs.file.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(list);
      reader.onload = e => {
          console.log('src',e)
        this.imgs.push(e.target.result) ;
        console.log(this.imgs)
      };
      console.log(list);
      //this.$refs.file.value = "";
    }
  }
};
</script>
<style lang='scss' scoped>
img{
    margin: 4%;
    width: 42%;
    height: auto;
}
.btns{
  .addImg{
    height: 75px;
    width: 50%;
  }
  position: relative;
  input{
    z-index: 3;
    height: 0.75rem;
    width: 50%;
    top: 0;
    position: absolute;
    opacity: 0;
    left: 0;
  }
}

</style>
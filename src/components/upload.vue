<!-- by your name -->
<template>
  <div>
    <div class="btns">
 
      <yd-button class="addImg" size="small"  >添加照片</yd-button>
      
       <input type="file" accept="image/*" @change="fileChanged"  ref="file" multiple="multiple">
    </div>
       
      <div class="images">
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
    background: url(../assets/images/photo.png) 20px center no-repeat;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
    background-size: 1rem;
    font-size: .3rem;
    font-weight: 700;
    color: rgb(41, 40, 40);
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

.images{
  padding-bottom: auto;
}
</style>
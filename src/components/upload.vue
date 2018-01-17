<!-- by your name -->
<template>
  <div>
    <div class="btns">

      <yd-button class="addImg" size="small">添加照片</yd-button>

      <form id="uploadForm" enctype="multipart/form-data">
        <input type="file" name="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
      </form>

      <!-- <input type="file" accept="image/*" @change="fileChanged"  ref="file" multiple="multiple"> -->
    </div>

    <div class="images">
      <img :src="item" alt="" v-for="(item,index) in imgs" :key="index">
    </div>
    <!-- <yd-button class="upload" size="small"  @click.native="upLoad" >上传照片</yd-button>        -->
  </div>
</template>

<script>
  import * as api from "@/api/repair";
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        imgs: [],
      };
    },
    methods: {
      fileChanged(e) {
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file', file, file.name); //通过append向form对象添加数据
        param.append('chunk', '0'); //添加form表单中其他数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }; //添加请求头
        api.addPicture(param, config).then(res => {
          this.$store.commit('SET_IMGURL',   `http://api.yx101.cn/img/${res.filename}`)
          console.log('上传', res)
        })


        this.list = this.$refs.file.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.list);
        reader.onload = e => {
          console.log('src', e)
          this.imgs.push(e.target.result);
          console.log(this.imgs)
        };
        console.log(this.list);
        //this.$refs.file.value = "";
      },
      upLoad() {
        let param = new FormData()
        param.append(this.list)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }; //添加请求头
        api.addPicture(param, config).then(res => {
          console.log('上传', res)
        })
      }


    }
  };

</script>
<style lang='scss' scoped>
  img {
    margin: 4%;
    width: 42%;
    height: auto;
  }

  .btns {
    .addImg {
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
    input {
      z-index: 3;
      height: 0.75rem;
      width: 50%;
      top: 0;
      position: absolute;
      opacity: 0;
      left: 0;
    }
  }

  .images {
    padding-bottom: auto;
  }

</style>

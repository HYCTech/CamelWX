<template>
  <div>
    <div class="btns">
      <yd-button class="addImg" size="small">添加照片</yd-button>
      <form id="uploadForm" enctype="multipart/form-data">
        <input type="file" name="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
      </form>
    </div>
    <div class="images">
      <img :src="item" alt="" v-for="(item,index) in imgs" :key="index" @click="showPic(index)">
    </div>

    <yd-popup v-model="show" position="center" width="90%">
         <div style="padding:0.15rem">
            <div class="tc">
              <img :src="imgs[index]" style="width:60%;height:auto">
            </div>
            <p class="tc">
                <yd-button class="w30p mr10" @click.native="show = false">确定</yd-button>
                 <yd-button type="danger" class="w30p" @click.native="del(index)" >删除</yd-button>
            </p>
         </div>  
        </yd-popup>
  </div>
</template>

<script>
import * as api from "@/api";
export default {
  props: ["uSuccess","udel"],
  data() {
    return {
      show: false,
      imgs: [],
      index:-1,
    };
  },
  methods: {
    fileChanged() {
      const list = this.$refs.file.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(list);
      this.submit()
      reader.onload = e => {
        this.imgs.push(e.target.result);
      };
      console.log(list);
      this.$refs.file.value = "";
    },
    del(i){
      this.imgs.splice(i,1)
      this.udel(i)
      this.show=false
    },
     //提交照片
    submit() {
      this.$dialog.loading.open('上传中...');
      let that = this
      const list = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file", list);
      const xhr = new XMLHttpRequest();
      // console.dir(xhr)
      xhr.upload.onprogress = updateProgress;
      xhr.open("POST", "http://api.yx101.cn/upload", true);
      xhr.send(formData);
      xhr.onload = function(e) {
        if (this.status == 200 || this.status == 304) {
          let data = JSON.parse(this.response)
          console.log("success", data)
        
          that.uSuccess(data)
          console.log(123)
           that.$dialog.loading.close()
        }else{
          that.$dialog.loading.close()
          that.toastError('上传失败')
        }
      };
      xhr.onerror = () => {
        console.log("err");
      }
      xhr.onabort = () => {
        console.log("abort");
      }

      function updateProgress(event) {
        if (event.lengthComputable) {
          var completedPercent = event.loaded / event.total;
          console.log(completedPercent * 100, event.loaded, event.total);
        }
      }

      this.xhr = xhr;
    },
    showPic(i){
      this.show=true
      this.index=i

    },


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
  position: relative;

  .addImg {
    height: 75px;
    width: 50%;
    background: url("../assets/images/photo.png") 20px center no-repeat;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
    background-size: 1rem;
    font-size: 0.3rem;
    font-weight: 700;
    color: rgb(41, 40, 40);
  }
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
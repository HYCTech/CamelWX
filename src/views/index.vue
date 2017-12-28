<!-- by your name -->
<template>
  <div >
    <yd-cell-group class="mt30">
     <yd-cell-item  v-for="(item , index) in routerList" :key="index" arrow type="a" @click.native="$router.push(item.path)">
            <span slot="left">{{item.name}}</span>
        </yd-cell-item>  
    </yd-cell-group>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
       routerList:router.options.routes.filter(i=>i.name)
    };
  }
};
</script>
<style lang='scss' scoped>

</style>
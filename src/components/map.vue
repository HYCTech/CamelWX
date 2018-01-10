<template>
  <div id="container" ref="map">
  </div>
</template>

<script>
export default {
  name:'map',
  data(){
    return{
      position:'',
      address:''
    }
  },
  methods: {
    createMap() {
      let _this=this
       AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
        var map = new AMap.Map('container', {
            zoom: 16,
            scrollWheel: false
        })
        var positionPicker = new PositionPicker({
            mode: 'dragMap',
            map: map
        });

        positionPicker.on('success', function(positionResult) {
            _this.position = positionResult.position;
            _this.address= positionResult.address;
            console.log(`地址：${ _this.address}`)
            _this.$store.commit('SET_ADDRESS', _this.address)
        });
        positionPicker.on('fail', function(positionResult) {
          console.log('baocuo')
           
        });
        positionPicker.start(map.getBounds().getSouthWest())
     
      });
    }

  
  },
  mounted() {
    this.createMap()
  }
}

</script>
  <style>
#container {
  height: 30%;
}
</style>

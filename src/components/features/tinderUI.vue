<template>
  <div id="app">
    <Tinder key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
      <template slot-scope="scope">
        <div
          class="pic"
          :style="{
            'background-image': `url(https://cn.bing.com//th?id=OHR.${scope.data.id}_UHD.jpg&pid=hp&w=720&h=1280&rs=1&c=4&r=0)`
          }"
        />
      </template>
      <img class="like-pointer" slot="like" src="./assets/like-txt.png">
      <img class="nope-pointer" slot="nope" src="./assets/nope-txt.png">
      <img class="super-pointer" slot="super" src="./assets/super-txt.png">
    </Tinder>
  </div>
</template>

<script>
import Tinder from 'vue-tinder'
import source from "@/bing";
export default{
  components: {Tinder},
  data: () => ({
    queue: [],
    offset: 0
  }),
  created(){
    // sourceをmock化する
    this.mock();
  },
  methods: {
    mock(count = 5){
      // listに入れた画像データをcountが5になったら結合してqueueに入れる
      const list = [];
      for (let i = 0; i < count; i++) {
          list.push({id: source[this.offset]});
          this.offset++;
      }
      this.queue = this.queue.concat(list);
    },
    onSubmit({item}){
        if(this.queue.length < 3){
          this.mock();
        }
      }
    }
}
</script>

<style>
html, body{
  width: 100vw;
  height: 100vh;
  padding: 0;
}

body{
  margin: 0;
  background-color: #202020;
  overflow: hidden;
}

#app .vue-tinder{
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  bottom: 45px;
  margin: auto;
  min-width: 300px;
  max-width: 355px;
}

.nope-pointer, .like-pointer{
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 70px;
  height: 70px;
}

.nope-pointer{
  right: 10px;
}

.like-pointer{
  left: 10px;
}

.pic{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>

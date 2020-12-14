<template>
    <!-- <swipe style="text-align: center; line-height: 80px; height: 100px; background: #42b983;">
      <swipe-item v-for="(value, item) in items" :key="item" :style="{backgroundColor: value}">
      </swipe-item>
    </swipe> -->
    <div>
      <router-link to="/addLike">like</router-link>
      <div v-hammer:swipe="onSwipe">
        <h1>{{ events }}</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Swiping',
  data() {
    return {
      events: 'events',
      dict:{
        2: 'left',
        4: 'right',
        8: 'top',
        16: 'bottom'
      },
      items:{
        box1: '#085078',
        box2: '#373B44',
        box3: '#D38312',
        box4: '#1BFF4A',
        box5: '#33FFFF'
      }
    };
  },
  methods: {
    onSwipe(e){
      this.events = 'swipe' + this.dict[e.direction]
    }
  }
};
</script>

<style>

body, div{
  width: 100%;
  height: 100%;
}
</style>

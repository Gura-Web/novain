<template>
  <div>
      <router-link to="/addLike">戻る</router-link>
    <article 
      v-for="(music,index) in favoriteMusicList" 
      :key="index" 
      :data-index="index"
      :data-musicid="music.musicId"
      class="music-card"
    >
      <img :src="music.image" class="music-card__image" />
      <h1 class="music-card__name">{{music.title}}</h1>
      <!-- <p class="music-card__artistName">{{music.artistId}}</p> -->
      <button v-on:click="onRemoveFavorite">いいね解除</button>
    </article>
    <!-- <button v-on:click="getFavoriteMusicList"></button> -->
  </div>
</template>

<script>
import musicList from "../../assets/musicList.json";
export default {
  name: 'FavoriteMusic',
  data() {
    return {
      favoriteMusicList: [],
      state: this.$store.state
    };
  },
  mounted: function() {
    this.getFavoriteMusicList();
    
  },
  methods: {
    getMusicId(e) {
        const clickMusicId = e.currentTarget.parentNode.dataset.musicid;
        return clickMusicId;
    },
    changeVuexFavorite(id) {
        const elementId = id - 1;
        this.state[elementId].favorite = !this.state[elementId].favorite;
        console.log(this.state[elementId].musicId)
        console.log(this.state[elementId].favorite)
    },
    removeFavoriteMusicList(id) {
        const newArray = this.favoriteMusicList.filter(n => n.musicId != id);
        this.favoriteMusicList = newArray;
    },
    onRemoveFavorite(e) {
        const clickMusicId = this.getMusicId(e);
        this.changeVuexFavorite(clickMusicId);
        this.removeFavoriteMusicList(clickMusicId);
    },
    getFavoriteMusicList() {
        for(let i = 0; i < this.state.length; i++) {
            if(this.state[i].favorite) {
                this.favoriteMusicList.push(this.state[i]);
            }
        }
    }
  }
};
</script>

<style>
article {
  background: #fafafa;
  width: 500px;
  padding: 100px 0;
}
</style>
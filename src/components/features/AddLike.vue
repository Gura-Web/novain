<template>
  <div>
    <router-link to="/favoriteMusic">お気に入り一覧へ</router-link>
    <article 
      v-for="(music,index) in musicList" 
      :key="index" 
      :data-index="index"
      class="music-card"
    >
      <img :src="music.image" class="music-card__image" />
      <h1 class="music-card__name">{{music.title}}</h1>
      <p class="music-card__artistName">{{music.artistId}}</p>
      <button v-on:click="onAddFavorite">いいね</button>
    </article>
  </div>
</template>

<script>
import musicList from "../../assets/musicList.json";
export default {
  name: 'AddLike',
  data() {
    return {
      musicList: musicList,
      state: this.$store.state
    };
  },
  mounted: function () {
    // this.$store.favoriteIncrement();
    
  },
  methods: {
    onAddFavorite(e) {
      const clickMusicId = e.currentTarget.parentNode.dataset.index;
      // const clickMusicData = this.musicList[clickMusicId].title

      this.state[clickMusicId].favorite = !this.state[clickMusicId].favorite;
      console.log(this.state[clickMusicId].favorite);
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
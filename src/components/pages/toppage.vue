<template>
  <div class="container">
    <header class="header">
      <button class="btn search-music">曲を探す</button>
      <div class="header__icon"><img src="@/assets/images/favorite_24px.svg" alt=""></div>
    </header>
    <main class="main">
      <div class="music-area">
        <img src="@/assets/images/musicCover.png" alt="">
        <div class="left-col">
          <ul class="music-tags">
            <li>ライブの定番曲</li>
            <li>盛り上がり曲</li>
            <li>オススメ</li>
          </ul>
          <ul class="music-categories">
            <li>バラード</li>
            <li>デュエット</li>
          </ul>
        </div>
        <div class="right-col"><img src="@/assets/images/info_24px_rounded.svg" alt=""></div>
      </div>
    </main>
    <footer class="footer">
      <nav class="half-modal-menu">
        <h1 class="half-modal-menu__music-name">愚者のエンドロール</h1>
        <p class="half-modal-menu__artist-name">いしまるひろき</p>
        <div class="action-btns">
          <button class="action-btn reply"><img src="@/assets/images/reply_24px.svg" alt=""></button>
          <button class="action-btn close"><img src="@/assets/images/close_24px.svg" alt=""></button>
          <button class="action-btn like"><img src="@/assets/images/favorite_24px.svg" alt=""></button>
          <button class="action-btn pause"><img src="@/assets/images/pause_24px.svg" alt=""></button>
        </div>
      </nav>
    </footer>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted: function () {
    
  },
  methods: {
    
  }
};
</script>

<style>
.header {
  background-color: #000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  padding-bottom: 16px;
  height: 96px;
  border-radius: 18px 18px 0 0;
}
.header__icon {
  position: absolute;
  right: 10px;
  top: 40px;
  width: 36px;
  height: 36px;;
}
.header__icon img{
  width: 100%;
  height: 100%;
  display: block;
}
.btn.search-music {
  width: 200px;
  height: 32px;
  border: 1px solid #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.half-modal-menu {
  border-radius: 0 0 18px 18px;
}
</style>
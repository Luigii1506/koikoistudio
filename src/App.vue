<template>
  <q-layout view="lHh Lpr lFf" class="mainWrapper" id="appLayout">

    <q-header elevated class="glossy navbar">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="btn-navbar"
        />
        <img src="../public/img/koikoi_logo_blanco.png" class="img-navbar">
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
      behavior="mobile"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Us</q-item-label>
            <!--<q-item-label caption>quasar.dev</q-item-label>-->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Services</q-item-label>
            <!--<q-item-label caption>github.com/quasarframework</q-item-label>-->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>How to</q-item-label>
            <!--<q-item-label caption>chat.quasar.dev</q-item-label>-->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Blog</q-item-label>
            <!--<q-item-label caption>forum.quasar.dev</q-item-label>-->
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Contact</q-item-label>
            <q-item-label caption>koikoi@studio.com</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="header">
        <img alt="koikoi_logo" src="../public/img/koikoi_logo_blanco.png" class="logo">
      </div>
      <div class="first-section">
        <div class="row">
          <div class="col-12 col-md-5">
              <p class="first-section-text-1">WEB</p>
              <p class="first-section-text-2">PHRASE HERE</p>
              <p class="first-section-text-3">Algo más por aqui</p>
          </div>
          <div class="col-12 col-md-7 first-section-second-col">
            <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
            >
              <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
          </div>
        </div>
      </div>
      <div class="second-section">
        
      </div>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
  data() {
    return {
       show: false,
    }
  },
  setup () {
    return {
      leftDrawerOpen: ref(false),
      slide: ref(1)
    }
  },
  mounted() {
    window.addEventListener("load", this.onWindowLoad);
  },
  methods: {
      onWindowLoad() {
        let elemento = document.getElementById("appLayout");
        elemento.style.display = "block";
          setTimeout(() => {  this.show = true; }, 1000);
        AOS.init();
      },
  },
}
</script>

<style scoped>

#appLayout {
  display: none;
  overflow: hidden;
}

.q-toolbar {
  background-color: black;
}

.q-layout__section--marginal {
  background-color: unset;
}

.header {
  position: relative;
  width: 100vw;
  height: 200px;
}
.logo {
  width: 100px;
  position: absolute;
  left: 15px;
  top: 15px;
}
.mainWrapper {
  background-image: url('../public/img/web/fondo.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.footer-img {
  width: 100%;
}

.navbar {
  display: none;
}

.header {
  display: block;
}
/* Custom Components */

.q-toolbar {
  height: 65px;
}

.btn-navbar {
  font-size: 25px;
}

.img-navbar {
  width: 35px;
  position: absolute;
  right: 15px;
}

.pink {
  color:#9A38FF;
}

/* End Custom CSS */

.first-section-text-1 {
  color: #FFFFFF;
  font-size: 217px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 217px;
  text-align: center;
}

.first-section-text-2 {
  color: #FFFFFF;
  font-size: 72px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  opacity: 0.61;
  line-height: 72px;
  text-align: center;
}

.first-section-text-3 {
  color: #FFFFFF;
  font-size: 37px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  opacity: 0.61;
  line-height: 37px;
  text-align: center;
}

.first-section-second-col {
  padding-left: 25px;
  padding-right: 25px;
}

@media (max-width: 1800px) {
}

@media (max-width: 1500px) {
  .first-section-text-1 {
    font-size: 154px;
    line-height: 154px;
  }

  .first-section-text-2 {
    font-size: 51px;
    line-height: 51px;
  }

   .first-section-text-3 {
    font-size: 26px;
    line-height: 26px;
  }
}

@media (max-width: 1200px) {

  .first-section-text-1 {
    font-size: 109px;
    line-height: 109px;
  }

  .first-section-text-2 {
    font-size: 36px;
    line-height: 36px;
  }

   .first-section-text-3 {
    font-size: 18px;
    line-height: 18px;
  }
}

@media (max-width: 765px) {

  .first-section-text-1 {
    font-size: 78px;
    line-height: 78px;
    padding-top: 25px;
  }

  .first-section-text-2 {
    font-size: 26px;
    line-height: 26px;
  }

   .first-section-text-3 {
    font-size: 14px;
    line-height: 14px;
  }}

@media (max-width: 600px) {

  .navbar {
    display: block;
  }

  .header {
    display: none;
  }
}
</style>
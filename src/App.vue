<template>
  <q-layout view="lHh Lpr lFf" class="mainWrapper">
    <!--
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    -->
    <!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    -->

    <q-page-container>
      <div class="header">
        <img alt="koikoi_logo" src="../public/img/koikoi_logo_blanco.png" class="logo">
      </div>
      <div class="first-section">
        <div class="first-section-text-wrapper">
          <p class="title-section-1">if they don't see you,</p>
          <p class="title-section-1">it's because you haven't <span class="pink">seen us</span></p>
          <p class="title-section-2">The creative studio you were looking for</p>
        </div>  
      
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
            <img alt="Quasar logo" src="../public/img/inicio_card_1.png" style="width: 100%; height: 100%">
        </div>
         <div class="col-12 col-md-4">
            <img alt="Quasar logo" src="../public/img/inicio_card_2.png" style="width: 100%; height: 100%">
        </div>
         <div class="col-12 col-md-4">
            <img alt="Quasar logo" src="../public/img/inicio_card_3.png" style="width: 100%; height: 100%">
        </div>
      </div>
      <div class="third-section">
        <div class="row row-third-section">
          <div class="col-12">
            <p class="third-section-title">How?</p>
          </div>
          <div class="col-12 col-sm-4 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_1.png" class="third-section-small-img">
            <p class="third-section-text">What do you need?</p>
            <p class="third-section-text">- Get to know our</p>
            <p class="third-section-text">services</p>
          </div>
          <div class="col-12 col-sm-4 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_2.png" class="third-section-small-img ">
            <p class="third-section-text">Contact us via mail</p>
            <p class="third-section-text">Whatsapp or paloma</p>
          </div>
          <div class="col-12 col-sm-4 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_3.png" class="third-section-small-img ">
            <p class="third-section-text">We get to know you</p>
            <p class="third-section-text">and what you need</p>
          </div>
          <div class="col-12 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_4.png" class="third-section-big-img">
            <p class="third-section-text">WORKING</p>
            <p class="third-section-text">with you all the process</p>
            <p class="third-section-text">to rock your brand</p>
          </div>
        </div>
        <div class="row q-mt-xl">
          <img alt="Quasar logo" src="../public/img/details.png" class="third-section-details-img">
        </div>
        <div class="row third-section-circulo-img">
          <!--<img alt="Quasar logo" src="../public/img/circulo_color.png" class="third-section-circulo-img">-->
          <img alt="Quasar logo" src="../public/img/postick_1.png" class="third-section-circulo-img-1">
          <img alt="Quasar logo" src="../public/img/postick_2.png" class="third-section-circulo-img-2">
        </div>
        <div class="footer">
          <img alt="Quasar logo" src="../public/img/footer.png" class="footer-img">
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
   // HelloWorld
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style scoped>

.header {
  position: relative;
  width: 100vw;
  height: 200px;
}
.logo {
  width: 150px;
  position: absolute;
  left: 15px;
  top: 15px;
}
.mainWrapper {
  background-image: url('../public/img/fondo_color.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.title-section-1 {
  font-size: 75px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  line-height: 75px;
}
.title-section-2 {
  font-size: 32px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 32px;
}
.pink {
  color: #FF7AE2;
}
.computador {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.first-section {
  min-height: 1100px;
  position: relative;
  background-image: url('../public/img/computador.png');
  background-repeat: no-repeat;
  background-size: 1000px auto;
  background-position: right -170px top 100px;
  max-width: 1920px;
  margin: auto;
}
.first-section-text-wrapper {
  top: 30%;
  transform: translateY(-50%);
  position: absolute;
  left: 117px;
  margin-left: 20px;
  margin-right: 20px;
}
.third-section {
  background-image: url('../public/img/fondo_blanco.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.row-third-section {
  padding-top: 250px;
  padding-left: 20px;
  padding-right: 20px;
}
.third-section-small-img {
  width: 200px;
  height: 200px;    
  margin: auto;
  display: block;
  margin-bottom: 20px;
}
.third-section-big-img {
  width: 300px;
  height: 300px;    
  margin: auto;
  display: block;
  margin-bottom: 30px;
}
.third-section-text {
  font-size: 41px;
  text-align: center;
  line-height: 41px;
}
.third-section-details-img {
  max-width: 450px;
  margin: auto;
  width: 100%;
}

.third-section-title {
  color:#8450FD;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 84px;
  text-align: center;
  margin-bottom: 40px;
}
.third-section-circulo-img {
  background-image: url('../public/img/circulo_color.png');
  background-repeat: no-repeat;
  background-size: 90%;
  min-height: calc(100vw * 1400 / 1920);
  background-position: right;
  margin-top: 40px;
  position: relative;
}

.third-section-circulo-img-1 {
  width: calc(100vw * 440 / 1920);
  height: max-content;
  position: absolute;
  bottom: calc(100vw * 330 / 1920);
  right: calc(100vw * 782 / 1920);
}

.third-section-circulo-img-2 {
  width: calc(100vw * 622 / 1920);
  height: max-content;
  position: absolute;
  bottom: calc(100vw * 90 / 1920);
  right: calc(100vw * 100 / 1920);
}

.footer-img {
  width: 100%;
}
/*
.third-section-circulo-img {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-top: 50px;
}
*/

@media (max-width: 1800px) {
  .title-section-1 {
    font-size: 60px;
    line-height: 60px;
  }
  .first-section {
    background-size: 800px auto;
    max-width: 1550px;
    background-position: right -170px top 150px;
    min-height: 900px;
  }
  .first-section-text-wrapper {
    left: 70px;
  }

  .row-third-section {
    padding-top: 200px;
  }
}

@media (max-width: 1500px) {
  .third-section-text {
    font-size: 30px;
    line-height: 30px;
  }

  .third-section-details-img {
    max-width: 300px;
  }
}

@media (max-width: 1000px) {
  .row-third-section {
    padding-top: 150px;
  }

  .first-section {
    background-position: center bottom -165px;
    min-height: 1000px;
  }

  .first-section-text-wrapper {
    max-width: 80%;
    margin: auto;
    display: block;
    left: 0;
    right: 0;
  }
}

@media (max-width: 500px) {

  .third-section-title {
    font-size: 60px;
  }

  .first-section {
    background-size: 550px auto;
  }

  .first-section {
    background-position: center bottom -100px;
    min-height: 750px;
  }

  .title-section-1 {
    font-size: 45px;
    line-height: 45px;
  }

  .title-section-2 {
    font-size: 20px;
    line-height: 20px;
  }

  .third-section-text {
    font-size: 25px;
    line-height: 25px;
  }

  .third-section-details-img {
    max-width: 200px;
  }
}
</style>
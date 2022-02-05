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
        <img src="../../public/img/koikoi_logo_blanco.png" class="img-navbar">
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
        <img alt="koikoi_logo" src="../../public/img/koikoi_logo_blanco.png" class="logo">
      </div>
      <div class="first-section">
        <div class="row">
          <div class="col-12 col-md-5 first-section-col-1">
            <div class="first-section-text-wrapper">
              <p class="first-section-text-1">DESIGN</p>
              <p class="first-section-text-2">PHRASE HERE</p>
              <p class="first-section-text-3">Algo más por aqui</p>
            </div>
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
        <img src="../../public/img/design/fondo_blanco.png" alt="" class="second-section-fondo-blanco">
        <img src="../../public/img/design/circulo.png" class="second-section-burbuja">
        <p class="second-section-text">CHOOSE WHAT YOU NEED</p>
        <div class="second-section-row-wrapper">
          <div class="row second-section-row">
            <div class="col-6 relative-position">
              <div class="second-section-col-wrapper">
                <button class="second-section-col-button">A</button>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
              </div>
            </div>
            <div class="col-6 relative-position">
              <div class="second-section-col-wrapper">
                 <button class="second-section-col-button">B</button>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
                <p class="second-section-col-text">Ejemplo cualquiera</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      <div class="third-section">
        <div class="third-section-carousel">
          <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              class="third-section-q-carousel"
            >
              <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
              <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
        </div>
        <p class="third-section-text">EJEMPLOS GRÁFICOS</p>
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
  /*background-image: url('../public/img/design/fondo.png');*/
  /*background-color: red;*/
  background-color: red;
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

.first-section {
  margin-bottom: 50px;
}

.first-section-text-wrapper {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.first-section-text-1 {
  color: #FFFFFF;
  font-size: 140px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 140px;
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

.second-section {
  /*
  background-image: url('../public/img/web/fondo_blanco.png');
  background-repeat: no-repeat;
  background-size: cover; */
  height: calc(100vw *  1510 / 1938);
  position: relative;
}

.second-section-text {
  color: #732DC3;
  font-size: 72px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 72px;
  position: absolute;
  top: calc(100vw *  220 / 1938);
  left: 0px;
  right: 0px;
  margin: auto;
  text-align: center;
}

.second-section-row-wrapper {
  position: absolute;
  height: 845px;
  top: calc(100vw *  280 / 1938);
  left: 0px;
  right: 0px;
  width: calc(100vw *  1200 / 1938);
  margin: auto;
}

.second-section-col-text {
  font-size: 41px;
  font-family: 'Montserrat', sans-serif;
}

.second-section-col-wrapper {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: fit-content;
}

.second-section-row {
  height: inherit;
}

.second-section-col-button {
  background-color: black;
  color: white;
  width: calc(100vw *  374 / 1938);
  height: calc(100vw *  77.5 / 1938);
  margin: auto;
  margin-bottom: 70px;
  border-radius: 50px;
  line-height: 1;
  font-size: 62px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  display: block;
}

.second-section-fondo-blanco {
  width: 100%;
  max-height: 100%;
}

.second-section-burbuja {
  position: absolute;
  left: 0px;
  width: calc(100vw *  282 / 1938);
  bottom: 0px;
}

.third-section {
  height: calc(100vw *  774 / 1938);
  position: relative;
}

.third-section-text {
  color: #DDC300;
  font-size: 72px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 72px;
  text-align: center;
  position: absolute;
  bottom: calc(100vw *  169 / 1938);
  left: 0px;
  right: 0px;
}

.third-section-carousel {
  width: calc(100vw *  1053 / 1938);
  height: calc(100vw *  680 / 1938);
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: calc(100vw *  335 / 1938);
}

.third-section-q-carousel {
  height: 100%;
}

@media (max-width: 1680px) {
  .second-section-row-wrapper {
    height: 700px;
  }

  .second-section-col-text {
    font-size: 32px;
  }

  .second-section-text {
    font-size: 60px;
  }

  .second-section-col-button {
    font-size: 45px;
    margin-bottom: 40px
  }
}

@media (max-width: 1500px) {
  .first-section-text-1 {
    font-size: 100px;
    line-height: 100px;
  }

  .first-section-text-2 {
    font-size: 51px;
    line-height: 51px;
  }

   .first-section-text-3 {
    font-size: 26px;
    line-height: 26px;
  }

  .second-section-row-wrapper {
    height: 610px;
  }

  .second-section-col-text {
    font-size: 28px;
  }

  .second-section-text {
    font-size: 48px;
  }
}

@media (max-width: 1200px) {

  .first-section-text-1 {
    font-size: 70px;
    line-height: 70px;
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

@media (max-width: 1020px) {
  .first-section-col-1 {
    margin-bottom: 25px;
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


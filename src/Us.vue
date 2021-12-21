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
        <transition name="slide-fade" mode="out-in">
          <div class="first-section-text-wrapper" v-if="show">
            <p class="title-section-1">if they don't see you,</p>
            <p class="title-section-1">it's because you haven't <span class="pink">seen us</span></p>
            <p class="title-section-2">The creative studio you were looking for</p>
          </div>  
        </transition>
      </div>

      <div class="row">
        <div class="col-12 col-md-4">
            <img alt="Quasar logo" src="../public/img/inicio_card_1.png" style="width: 100%; height: 100%" class="test">
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
            <div data-aos="fade-up"> <p class="third-section-title">How?</p></div>
          </div>
          <div class="col-12 col-sm-4 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_1.png" class="third-section-small-img">
            <p class="third-section-text">What do you need?</p>
            <p class="third-section-text">- Get to know our</p>
            <p class="third-section-text">services</p>
          </div>
          <div class="col-12 col-sm-4 col-xl-3">
            <img alt="Quasar logo" src="../public/img/tooltip_2.png" class="third-section-small-img">
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
          <div 
            data-aos-offset="300"
            data-aos="flip-up" 
            class="animation-postick-1">
            <img alt="Quasar logo" src="../public/img/postick_1.png" class="third-section-circulo-img-1">
          </div>
          <div 
            data-aos-offset="300"
            data-aos="flip-down" 
            class="animation-postick-2">
            <img alt="Quasar logo" src="../public/img/postick_2.png" class="third-section-circulo-img-2">
            <div class="postick-text">
              <p class="postick-text-1">Contact us</p>
              <p class="postick-text-2">koikoi@studio.com</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <img alt="Quasar logo" src="../public/img/footer.png" class="footer-img">
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import simpleParallax from 'simple-parallax-js';
import { ref } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',
  data() {
    return {
       show: false
    }
  },
  components: {
   // HelloWorld
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  },
  mounted() {
    //let elemento = document.getElementById("appLayout");
    //elemento.style.display = "block";
    //console.log('asd', elemento);

    window.addEventListener("load", this.onWindowLoad);
    /*
    var DescriptionSectionLeftChair = document.querySelectorAll(".test");
    new simpleParallax(DescriptionSectionLeftChair, {
      orientation: "left",
      scale: 1.4,
      overflow: true,
      delay: 0.4,
      transition: "linear",
    });
    */
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

#appLayout {
  display: none;
}

.q-toolbar {
  background-color: black;
}

.q-layout__section--marginal {
  background-color: unset;
}

.postick-text {
  position: absolute;
  bottom: calc(100vw * 140 / 1920);
  right: calc(100vw * 80 / 1920);
}

.postick-text-1 {
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-bottom: 0px;
  text-align: center;
  font-size: calc(100vw * 46 / 1920);
}

.postick-text-2 {
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: calc(100vw * 46 / 1920);
}

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
  height: auto;    
  margin: auto;
  display: block;
  margin-bottom: 20px;
}
.third-section-big-img {
  width: 300px;
  height: auto;    
  margin: auto;
  display: block;
  margin-bottom: 30px;
}
.third-section-text {
  font-size: 41px;
  text-align: center;
  line-height: 41px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
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
  background-image: url('../public/img/circulo_color-min.png');
  background-repeat: no-repeat;
  background-size: 90%;
  min-height: calc(100vw * 1400 / 1920);
  background-position: right;
  margin-top: 40px;
  position: relative;
}

.third-section-circulo-img-1 {
  width: calc(100vw * 440 / 1920);
  height: 100%;
  /*
  height: max-content;
  position: absolute;
  bottom: calc(100vw * 330 / 1920);
  right: calc(100vw * 782 / 1920);
  */
}

.animation-postick-1 {
  position: absolute;
  bottom: calc(100vw * 330 / 1920);
  right: calc(100vw * 782 / 1920);
}

.third-section-circulo-img-2 {
  width: calc(100vw * 622 / 1920);
  height: 100%;
  /*
  height: max-content;
  position: absolute;
  bottom: calc(100vw * 90 / 1920);
  right: calc(100vw * 100 / 1920);
  */
}

.animation-postick-2 {
  position: absolute;
  bottom: calc(100vw * 90 / 1920);
  right: calc(100vw * 100 / 1920);
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

/*
.third-section-circulo-img {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-top: 50px;
}
*/

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
/* End Custom CSS */

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


@media (max-width: 600px) {

  .navbar {
    display: block;
  }

  .header {
    display: none;
  }

  .third-section-title {
    margin-bottom: 0px;
  }

  .third-section-big-img {
    margin-top: 30px;
  }

  .third-section-small-img {
    margin-top: 20px;
  }

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
    margin-bottom: 0px;
    line-height: 30px;
  }

  .third-section-details-img {
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    max-width: 255px;
  }

  .third-section-circulo-img-2 {
    width: calc(100vw * 1000 / 1920);

  }

  .animation-postick-2 {
    position: absolute;
    bottom: calc(100vw * 250 / 1920);
    right: calc(100vw * 150 / 1920);
  }

  .postick-text {
    bottom: calc(100vw * 250 / 1920);
    right: calc(100vw * 150 / 1920);
  }

  .postick-text-1,
  .postick-text-2 {
    font-size: calc(100vw * 70 / 1920);
  }

  .animation-postick-1 {
    display: none;
  }

  .third-section-small-img {
    width: 160px;
  }

  .third-section-big-img {
    width: 220px;
  }

}
</style>
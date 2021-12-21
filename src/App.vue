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
        <div class="title">GET TO KNOW <span class="pink">US</span></div>
        <div class="text-wrapper">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
          <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        </div>    
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
       show: false
    }
  },
  setup () {
    return {
      leftDrawerOpen: ref(false)
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
  background-image: linear-gradient(to bottom, #000000 50%, #9a38ff 100%);
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
/* End Custom CSS */

.title {
  font-size: 141px;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  line-height: 141px;
  margin-bottom: 50px;
}

.text-wrapper {
  font-size: 41px;
  font-family: 'Montserrat', sans-serif;
  color: #FFFFFF;
  width: calc(100vw * 1600 / 1938);
  margin: auto;
  display: block;
}

.pink {
  color:#9A38FF;
}

@media (max-width: 1800px) {

}

@media (max-width: 1500px) {
  .title {
    font-size: 100px;
    line-height: 100px;
  }

  .text-wrapper {
    font-size: 30px;
  }
}

@media (max-width: 1000px) {
  .title {
    font-size: 70px;
    line-height: 70px;
  }

  .text-wrapper {
    font-size: 21px;
  }
}

@media (max-width: 765px) {
  .title {
    font-size: 50px;
    line-height: 50px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .text-wrapper {
    font-size: 16px;
  }
}


@media (max-width: 600px) {

  .navbar {
    display: block;
  }

  .header {
    display: none;
  }
}
</style>
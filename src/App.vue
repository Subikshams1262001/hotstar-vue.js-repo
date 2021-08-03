<template>
  <div id="app">
    <VueScrollFixedNavbar>
      <header>
        <Navbar />
      </header>
    </VueScrollFixedNavbar>

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  height: 80px;
  width: 100%;
  background-color: black;
  padding: 5px;
  font-size: 18px;
}
body {
  background-color: #00091a;
}
VueScrollFixedNavbar {
  width: 100%;
  height: 80px;
  background-color: #00091a;
}
</style>

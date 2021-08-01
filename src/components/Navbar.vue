<template>
  <VueScrollFixedNavbar>
    <nav class="sticky-top">
      <div class="menu-item dis"><a href="#">Disney+Hotstar</a></div>
      <Dropdown title="TV" :items="tv" />
      <Dropdown title="Movies" :items="movies" />
      <Dropdown title="Sports" :items="sports" />

      <div class="menu-item"><a href="#">Premium</a></div>
      <div class="menu-item"><a href="#">Disney+New</a></div>
      <div class="menu-item fw-bold">
        <a href="#"><i :style="{ color: 'orange' }">Kids</i></a>
      </div>
      <div class="menu-item search mb-1 pb-0 border-bottom">
        Search<i
          class="fa fa-search"
          aria-hidden="true"
          style="margin-left:70px;"
        ></i>
      </div>

      <div class="menu-item">
        <router-link to="/Subscribe"
          ><button class="subs text-white">Subscribe</button></router-link
        >
      </div>

      <div class="menu-item log"><a href="#">Login</a></div>
    </nav>
  </VueScrollFixedNavbar>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      tv: [
        {
          title: "Hotstar Specials",
          link: "#",
        },
        {
          title: "Quix",
          link: "#",
        },
        {
          title: "Star Jalsha",
          link: "#",
        },
        {
          title: "StarPlus",
          link: "#",
        },
        {
          title: "Star Vijay",
          link: "#",
        },
        {
          title: "Star Bharat",
          link: "#",
        },
        {
          title: "Asianet",
          link: "#",
        },
        {
          title: "Star Maa",
          link: "#",
        },
      ],
      movies: [
        {
          title: "Tamil",
          link: "#",
        },
        {
          title: "Telugu",
          link: "#",
        },
        {
          title: "Malayalam",
          link: "#",
        },
        {
          title: "Hindi",
          link: "#",
        },
        {
          title: "English",
          link: "#",
        },
        {
          title: "Marathi",
          link: "#",
        },
      ],
      sports: [
        {
          title: "Hockey",
          link: "#",
        },
        {
          title: "Cricket",
          link: "#",
        },
        {
          title: "Tennis",
          link: "#",
        },
        {
          title: "Volley Ball",
          link: "#",
        },
        {
          title: "Foot Ball",
          link: "#",
        },
        {
          title: "Golf",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
.dis {
  font-family: lucida sans;
}
nav {
  display: flex;
}
nav .menu-item {
  padding: 15px 20px;
  display: flex;
  position: relative;
}

nav .menu-item a {
  color: white;
  text-decoration: none;
}
.search {
  color: white;
  margin-left: 150px;
}

.subs {
  font-size: 16px;
  background-color: blue;
  width: 80px;
  border-radius: 5px;
}
</style>

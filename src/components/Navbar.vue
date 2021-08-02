<template>
  <VueScrollFixedNavbar>
    <nav class="sticky-top">
      <div class="menu-item dis">
        <router-link to="/">Disney+Hotstar</router-link>
      </div>
      <Dropdown title="TV" :items="tv" id="tv" />
      <Dropdown title="Movies" :items="movies" id="tv" />
      <Dropdown title="Sports" :items="sports" id="tv" />

      <div class="menu-item" id="tv"><a href="#">Premium</a></div>
      <div class="menu-item" id="tv"><a href="#">Disney+New</a></div>
      <div class="menu-item fw-bold" id="tv">
        <a href="#"><i :style="{ color: 'orange' }">Kids</i></a>
      </div>
      <div class="menu-item search mb-1 pb-0 border-bottom" id="search">
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

      <div class="menu-item log" id="log"><a href="#">Login</a></div>
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
VueScrollFixedNavbar {
  width: 100%;
  height: 80px;
  background-color: #00091a;
}
@media screen and (min-width: 70px) and (max-width: 310px) {
  #tv {
    display: none;
  }
  .subs {
    margin-left: -10px;
  }
  #log {
    display: none;
  }
  #search {
    display: none;
  }
}
@media screen and (min-width: 311px) and (max-width: 350px) {
  #tv {
    display: none;
  }
  #log {
    display: none;
  }
  #search {
    display: none;
  }
}
@media screen and (min-width: 351px) and (max-width: 399px) {
  #tv {
    display: none;
  }
  #log {
    display: none;
  }
  .subs {
    margin-left: 50px;
  }
  #search {
    display: none;
  }
}
@media screen and (min-width: 400px) and (max-width: 420px) {
  #tv {
    display: none;
  }
  #log {
    display: none;
  }
  .subs {
    margin-left: 70px;
  }
  #search {
    display: none;
  }
}
@media screen and (min-width: 421px) and (max-width: 540px) {
  #tv {
    display: none;
  }
  .subs {
    margin-left: 120px;
  }
  #search {
    display: none;
  }
}
@media screen and (min-width: 541px) and (max-width: 770px) {
  #tv {
    display: none;
  }
}
@media screen and (min-width: 771px) and (max-width: 1100px) {
  #tv {
    display: none;
  }
  #search {
    margin-left: 400px;
  }
}
</style>

<template>
  <div class="footer">
    <div class="about">
      <router-link to="/About"
        ><span class="text-white  mx-2">AboutDisney+ Hotstar</span></router-link
      >
      <a
        href="https://www.hotstar.com/in/terms-of-use"
        class="abt term text-white text-decoration-none"
        >Terms Of Use</a
      >
      <a
        href="https://www.hotstar.com/in/privacy-policy"
        class="abt text-white text-decoration-none"
      >
        Privacy Policy</a
      >
      <a
        href="https://help.hotstar.com/support/home"
        class="abt text-white text-decoration-none"
        >FAQ</a
      >
      <a
        href="https://help.hotstar.com/support/tickets/new"
        class="abt text-white text-decoration-none"
        >Feedback</a
      >
      <a
        href="https://jobs.lever.co/hotstar"
        class="abt text-white text-decoration-none"
        >Careers</a
      >
      <div>
        <p class="text-white copy">
          &copy; 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
          related channel and programming logos are service marks of, and all
          related programming visuals and elements are the property of, Home Box
          Office, Inc. All rights reserved.
        </p>
      </div>
    </div>
    <div class="connect">
      <p class="text-white">Connect with us</p>
    </div>
    <div class="fb">
      <a href="https://www.facebook.com/DisneyPlusHotstar"
        ><img src="../assets/fb.jpg" class="fbimg"
      /></a>

      <a href="https://twitter.com/DisneyPlusHS"
        ><img src="../assets/twitter.jpg" class="twitimg"
      /></a>
    </div>
    <div class="connect2">
      <p class="text-white">Disney+ Hotstar App</p>
    </div>
    <div class="google">
      <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
        ><img src="../assets/googlep.jpg" class="googleimg"
      /></a>

      <a href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
        ><img src="../assets/apple.jpg" class="appleimg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  height: fit-content;
}
.about {
  margin-left: 10px;
  margin: 20px 10px;
}
.abt {
  margin-right: 20px;
}
.term {
  margin-left: 20px;
}
.copy {
  margin-left: 10px;

  font-size: 15px;
  margin: 20px 0px 50px 0px;
}
.connect {
  margin-left: 700px;
  margin-top: -150px;
}
.fb {
  margin-top: 25px;
  margin-left: 700px;
}
.fbimg {
  border-radius: 5px;
  width: 50px;
  height: 50px;
}
.twitimg {
  border-radius: 5px;
  width: 50px;
  height: 50px;
  margin-left: 10px;
}
.connect2 {
  margin-left: 900px;
  margin-top: -98px;
}
.google {
  margin-top: 25px;
  margin-left: 900px;
}
.googleimg {
  border-radius: 5px;
  width: 140px;
  height: 50px;
  margin-right: 15px;
}
.appleimg {
  border-radius: 5px;
  width: 140px;
  height: 50px;
}
@media screen and (min-width: 150px) and (max-width: 310px) {
  .connect {
    margin-left: 10px;
    margin-top: 20px;
  }
  .fb {
    margin-top: 20px;
    margin-left: 20px;
  }
  .connect2 {
    margin-left: 160px;
    margin-top: -92px;
  }
  .google {
    margin-top: 25px;
    margin-left: 65px;
  }
  .googleimg {
    margin-left: 90px;
    width: 120px;
  }
  .appleimg {
    margin-top: 10px;
    margin-left: 90px;
    width: 120px;
  }
}
@media screen and (min-width: 311px) and (max-width: 350px) {
  .connect {
    margin-left: 10px;
    margin-top: 20px;
  }
  .fb {
    margin-top: 20px;
    margin-left: 20px;
  }
  .connect2 {
    margin-left: 160px;
    margin-top: -92px;
  }
  .google {
    margin-top: 25px;
    margin-left: 75px;
  }
  .googleimg {
    margin-left: 90px;
  }
  .appleimg {
    margin-top: 10px;
    margin-left: 90px;
  }
}

@media screen and (min-width: 351px) and (max-width: 420px) {
  .connect {
    margin-left: 10px;
    margin-top: 20px;
  }
  .fb {
    margin-top: 20px;
    margin-left: 20px;
  }
  .connect2 {
    margin-left: 190px;
    margin-top: -92px;
  }
  .google {
    margin-top: 25px;
    margin-left: 100px;
  }
  .googleimg {
    margin-left: 90px;
  }
  .appleimg {
    margin-top: 10px;
    margin-left: 90px;
  }
}
@media screen and (min-width: 421px) and (max-width: 540px) {
  .connect {
    margin-left: 10px;
    margin-top: 20px;
  }
  .fb {
    margin-top: 20px;
    margin-left: 20px;
  }
  .connect2 {
    margin-left: 190px;
    margin-top: -92px;
  }
  .google {
    margin-top: 25px;
    margin-left: 100px;
  }
  .googleimg {
    margin-left: 90px;
  }
  .appleimg {
    margin-top: -80px;
    margin-left: 240px;
  }
}
@media screen and (min-width: 541px) and (max-width: 770px) {
  .connect {
    margin-left: 400px;
    margin-top: -188px;
  }
  .fb {
    margin-top: 20px;
    margin-left: 400px;
  }
  .connect2 {
    margin-left: 560px;
    margin-top: -92px;
  }
  .google {
    margin-top: 25px;
    margin-left: 100px;
  }
  .googleimg {
    margin-left: 460px;
  }
  .appleimg {
    margin-left: 460px;
    margin-top: 10px;
  }
}
</style>

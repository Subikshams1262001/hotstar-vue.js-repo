<template>
  <div class="container-fluid">
    <div class="row">
      <div class="mt-5 ms-3 col-6" style="font-size:16px;">
        <router-link to="/About"
          ><span class="text-white text-decoration-none mx-2"
            >About Disney + Hotstar</span
          ></router-link
        >

        <a
          href="https://www.hotstar.com/in/terms-of-use"
          class="text-white text-decoration-none mx-2"
          >Terms Of Use</a
        >
        <a
          href="https://www.hotstar.com/in/privacy-policy"
          class="text-white text-decoration-none mx-2"
        >
          Privacy Policy</a
        >
        <a
          href="https://help.hotstar.com/support/home"
          class="text-white text-decoration-none mx-2"
          >FAQ</a
        >
        <a
          href="https://help.hotstar.com/support/tickets/new"
          class="text-white text-decoration-none mx-2"
          >Feedback</a
        >
        <a
          href="https://jobs.lever.co/hotstar"
          class="text-white text-decoration-none"
          >Careers</a
        >
        <p class="text-white mt-4 copy" style="font-size:14px;">
          &copy; 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
          related channel and programming logos are service marks of, and all
          related programming visuals and elements are the property of, Home Box
          Office, Inc. All rights reserved.
        </p>
      </div>
      <div class="col-2  mt-5  text-white">
        <p style="font-size:16px;" class="text-white">Connect with us</p>
        <a href="https://www.facebook.com/DisneyPlusHotstar"
          ><img
            src="../assets/fb.jpg"
            class="rounded mb-2 mt-2 me-1"
            width="40px"
            height="40px"
        /></a>

        <a href="https://twitter.com/DisneyPlusHS"
          ><img
            src="../assets/twitter.jpg"
            class="rounded"
            width="40px"
            height="40px"
        /></a>
      </div>
      <div class="col-3 mt-5  text-white">
        <p style="font-size:16px;" class="text-white">Disney+ Hotstar App</p>
        <a
          href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
          ><img
            src="../assets/googlep.jpg"
            class=" rounded mb-2 mt-2 me-2"
            width="130px"
            height="40"
        /></a>

        <a href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
          ><img
            src="../assets/apple.jpg"
            class=" rounded"
            width="130px"
            height="40"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
